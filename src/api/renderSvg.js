import { select } from 'd3-selection';

const renderSVG = (containerId, opt) => {
  const container = select(containerId)
    .append('svg')
    .attr('width', opt.chart.width)
    .attr('height', opt.chart.height)
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', '0 0 ' + opt.chart.width + ' ' + opt.chart.height)
    .classed('vizart-chart', true);

  const svg = container
    .append('g')
    .attr(
      'transform',
      'translate(' + opt.chart.margin.left + ',' + opt.chart.margin.top + ')'
    );

  return {
    container,
    svg,
  };
};

const apiRender = state => ({
  render(data) {
    state._data = state._composers.data(data, state._options, true);
    state._color = state._composers.color(
      state._options.color,
      state._data,
      state._options
    );

    const { container, svg } = renderSVG(state._containerId, state._options);
    state._container = container;
    state._svg = svg;
  },
});

export default apiRender;
