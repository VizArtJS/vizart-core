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

export default renderSVG;
