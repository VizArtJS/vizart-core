import { select } from 'd3-selection';

//Taken from http://bl.ocks.org/mbostock/7555321
//Wraps SVG text
const wrapSVGText = (text, width) => {
  text.each(function() {
    let text = select(this),
      words = text
        .text()
        .split(/\s+/)
        .reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1.4, // ems
      y = text.attr('y'),
      x = text.attr('x'),
      dy = parseFloat(text.attr('dy')),
      tspan = text
        .text(null)
        .append('tspan')
        .attr('x', x)
        .attr('y', y)
        .attr('dy', dy + 'em');

    while ((word = words.pop())) {
      line.push(word);
      tspan.text(line.join(' '));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(' '));
        line = [word];
        tspan = text
          .append('tspan')
          .attr('x', x)
          .attr('y', y)
          .attr('dy', ++lineNumber * lineHeight + dy + 'em')
          .text(word);
      }
    }
  });
};

//Wraps SVG text - Taken from http://bl.ocks.org/mbostock/7555321
const wrapTextSmaller = (text, width) => {
  let _text = select(text),
    words = _text
      .text()
      .split(/\s+/)
      .reverse(),
    currentSize = +_text.style('font-size').replace('px', ''),
    word,
    line = [],
    lineNumber = 0,
    lineHeight = 1.2, // ems
    extraHeight = 0.2,
    y = _text.attr('y'),
    dy = parseFloat(_text.attr('dy')),
    //First span is different - smaller font
    tspan = _text
      .text(null)
      .append('tspan')
      .attr('class', 'subTotal')
      .attr('x', 0)
      .attr('y', y)
      .attr('dy', dy + 'em')
      .style(
        'font-size',
        (Math.round(currentSize * 0.5) <= 5
          ? 0
          : Math.round(currentSize * 0.5)) + 'px'
      );
  while ((word = words.pop())) {
    line.push(word);
    tspan.text(line.join(' '));
    if ((tspan.node().getComputedTextLength() > width) | (word === '|')) {
      if ((word = '|')) word = '';
      line.pop();
      tspan.text(line.join(' '));
      line = [word];
      tspan = _text
        .append('tspan')
        .attr('x', 0)
        .attr('y', y)
        .attr('dy', ++lineNumber * lineHeight + extraHeight + dy + 'em')
        .text(word);
    } //if
  } //while
}; //wrap

export { wrapSVGText, wrapTextSmaller };
