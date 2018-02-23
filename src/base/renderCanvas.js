import renderSVG from './renderSVG';

const renderCanvas = (containerId, frontCanvasId, hiddenCanvasId, opts) => {
  const { container, svg } = renderSVG(containerId, opts);

  container.style('position', 'absolute').style('pointer-events', 'none');

  const detachedContainer = select(containerId).append('vizart-detached');
  const devicePixelRatio = window.devicePixelRatio || 1;
  const frontCanvas = select(containerId)
    .append('canvas')
    .attr('id', frontCanvasId)
    .style('display', 'block')
    .style('width', opts.chart.innerWidth + 'px')
    .style('height', opts.chart.innerHeight + 'px')
    .style(
      'margin',
      opts.chart.margin.top + 'px 0 0 ' + opts.chart.margin.left + 'px '
    )
    .attr('width', opts.chart.innerWidth * devicePixelRatio)
    .attr('height', opts.chart.innerHeight * devicePixelRatio);

  const hiddenCanvas = select(containerId)
    .append('canvas')
    .attr('id', hiddenCanvasId)
    .style('display', 'none')
    .style('width', opts.chart.innerWidth + 'px')
    .style('height', opts.chart.innerHeight + 'px')
    .style(
      'margin',
      opts.chart.margin.top + 'px 0 0 ' + opts.chart.margin.left + 'px '
    )
    .attr('width', opts.chart.innerWidth * devicePixelRatio)
    .attr('height', opts.chart.innerHeight * devicePixelRatio);

  const hiddenContext = hiddenCanvas.node().getContext('2d');
  const frontContext = frontCanvas.node().getContext('2d');

  hiddenContext.mozImageSmoothingEnabled = false;
  hiddenContext.webkitImageSmoothingEnabled = false;
  hiddenContext.msImageSmoothingEnabled = false;
  hiddenContext.imageSmoothingEnabled = false;

  const backingStoreRatio =
    frontContext.webkitBackingStorePixelRatio ||
    frontContext.mozBackingStorePixelRatio ||
    frontContext.msBackingStorePixelRatio ||
    frontContext.oBackingStorePixelRatio ||
    frontContext.backingStorePixelRatio ||
    1;

  const ratio = devicePixelRatio / backingStoreRatio;
  const canvasScale = ratio;
  frontContext.scale(ratio, ratio);
  hiddenContext.scale(ratio, ratio);

  return {
    detachedContainer,
    frontCanvas,
    hiddenCanvas,
    hiddenContext,
    frontContext,
    canvasScale,
    container,
    svg,
  };
};

export default renderCanvas;
