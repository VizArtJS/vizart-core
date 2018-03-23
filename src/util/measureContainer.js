import { select } from 'd3-selection';
import { warn } from '../util/logger';

const containerWidth = container =>
  parseInt(container.node().getBoundingClientRect().width, 10) || 400;
const containerHeight = container =>
  parseInt(container.node().getBoundingClientRect().height, 10) || 300;

/*
 Sanitize and provide default for the container height.
 */
const sanitizeHeight = container =>
  container.node() === null ? 0 : containerHeight(container) || 300;

/*
 Sanitize and provide default for the container width.
 */
const sanitizeWidth = container =>
  container.node() === null ? 0 : containerWidth(container) || 400;

const isDefined = d => d !== undefined && d !== null && !Number.isNaN(d);

const assignContainerBound = (containerId, opt) => {
  const {
    chart: {
      width: userWidth,
      height: userHeight,
      margin: { top, bottom, left, right },
    },
  } = opt;

  const container = select(containerId);

  // check if user setting is valid
  if (isDefined(userWidth)) {
    if (userWidth <= left + right) {
      warn('invalid width setting has been ignored');
      delete opt.chart['width'];
    }
  }

  if (isDefined(userHeight)) {
    if (userHeight <= top + bottom) {
      warn('invalid height setting has been ignored');
      delete opt.chart['height'];
    }
  }

  // user setting has priority
  if (!isDefined(opt.chart.width)) {
    opt.chart.width = sanitizeWidth(container);
  }

  if (!isDefined(opt.chart.height)) {
    opt.chart.height = sanitizeHeight(container);
  }

  opt.chart.innerWidth = opt.chart.width - left - right;
  opt.chart.innerHeight = opt.chart.height - top - bottom;

  return opt;
};

export default assignContainerBound;
