import { select } from 'd3-selection';
import renderSvg from './renderSvg';

const apiRender = state => ({
  render: data => {
    renderSvg(state).render(data);

    const {
      _container: container,
      _containerId: containerId,
      _frontCanvasId: frontCanvasId,
      _hiddenCanvasId: hiddenCanvasId,
      _options: opts,
    } = state;

    container.style('position', 'absolute').style('pointer-events', 'none');

    const detachedContainer = select(containerId).append('vizart-detached');
    const devicePixelRatio = window.devicePixelRatio || 1;
    const frontCanvas = select(containerId)
      .append('canvas')
      .attr('id', frontCanvasId)
      .style('position', 'absolute')
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
      .style('position', 'absolute')
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

    state._frontCanvas = frontCanvas;
    state._hiddenCanvas = hiddenCanvas;
    state._frontContext = frontContext;
    state._hiddenContext = hiddenContext;
    state._canvasScale = canvasScale;
    state._detachedContainer = detachedContainer;
  },
});

export default apiRender;
