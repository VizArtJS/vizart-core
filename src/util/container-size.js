import { select } from 'd3-selection';
import check from './check';

const containerWidth = container =>
  parseInt(container.node().getBoundingClientRect().width, 10) || 300;
const containerHeight = container =>
  parseInt(container.node().getBoundingClientRect().height, 10) || 400;

/*
 Sanitize and provide default for the container height.
 */
const sanitizeHeight = (height, container) => {
  return container.node() === null
    ? 0
    : height || containerHeight(container) || 300;
};

/*
 Sanitize and provide default for the container width.
 */
const sanitizeWidth = (width, container) => {
  return container.node() === null
    ? 0
    : width || containerWidth(container) || 400;
};

/*
 Calculate the available height for a chart.
 */
const availableHeight = (height, container, margin) => {
  return Math.max(
    0,
    sanitizeHeight(height, container) - margin.top - margin.bottom
  );
};

/*
 Calculate the available width for a chart.
 */
const availableWidth = (width, container, margin) => {
  return Math.max(
    0,
    sanitizeWidth(width, container) - margin.left - margin.right
  );
};

/*
 Gets the browser window size
 Returns object with height and width properties
 */
const windowSize = () => {
  // Sane defaults
  let size = { width: 640, height: 480 };

  // Most recent browsers use
  if (window.innerWidth && window.innerHeight) {
    size.width = window.innerWidth;
    size.height = window.innerHeight;
    return size;
  }

  // IE can use depending on mode it is in
  if (
    document.compatMode == 'CSS1Compat' &&
    document.documentElement &&
    document.documentElement.offsetWidth
  ) {
    size.width = document.documentElement.offsetWidth;
    size.height = document.documentElement.offsetHeight;
    return size;
  }

  // Earlier IE uses Doc.body
  if (document.body && document.body.offsetWidth) {
    size.width = document.body.offsetWidth;
    size.height = document.body.offsetHeight;
    return size;
  }

  return size;
};

const assignBound = (containerId, opt) => {
  opt.chart.width = sanitizeWidth(opt.chart.width, select(containerId));
  opt.chart.height = sanitizeHeight(opt.chart.height, select(containerId));
  opt.chart.innerWidth = availableWidth(
    opt.chart.width,
    select(containerId),
    opt.chart.margin
  );
  opt.chart.innerHeight = availableHeight(
    opt.chart.height,
    select(containerId),
    opt.chart.margin
  );

  return opt;
};

const getBound = (containerId, opt, size) => {
  if (!check(size) || !check(size.width) || !!check(size.height)) {
    // recalculate width and height
    delete opt.chart['width'];
    delete opt.chart['height'];
  }

  return assignBound(containerId, opt);
};

export {
  containerWidth,
  containerHeight,
  sanitizeWidth,
  sanitizeHeight,
  availableWidth,
  availableHeight,
  windowSize,
  assignBound,
  getBound,
};
