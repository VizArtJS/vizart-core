import { voronoi } from 'd3-voronoi';
import { interpolate } from 'd3-interpolate';
import { selection } from 'd3-selection';

class Voronoi {
    constructor(_chart, baseLayer, _voronoiSelector) {
        console.log(_chart);
        this._voronoi = voronoi()
            .x(_chart._x)
            .y(_chart._y)
            .extent([[0, 0], [_chart._options.width, _chart._options.height]]);

        this._svg = _chart._svg;
        this.voronoiGroup;
        this.voronoiSelector = _voronoiSelector;
        this.baseLayer = baseLayer;
    }

    render(_data) {
        this.update(_data);
    }

    update( _data) {
        this._svg.select('.voronoi-group').remove();

        this.voronoiGroup = this._svg.append("g")
            .attr("class", "voronoi-group");

        this.voronoiGroup.selectAll(".voronoi-web")
            .data(this._voronoi(_data))
            .enter()
            .append("path")
            .attr("d", (d)=> { return "M" + d.join("L") + "Z"; })
            .datum((d)=> { return d.point; })
            .attr("class", 'voronoi-web')
            .attr("data-voronoi", this.voronoiSelector)
            .style("stroke", "#2074A0")
            .style("fill", "none")
            .style('stroke', '#7EB852')
            .style('stroke-opacity', 1)
            .style("pointer-events", "all")
            .on("mouseover", this.mouseOn)
            .on("mouseout", this.mouseOff);
    }


    mouseOn(d, i) {
        let selector = this.baseLayer.select("[data-voronoi=\""+ this.voronoiSelector + "\"]");
        // append 1es to bubbles that will be used to show the precise data points.
        // translate their location based on margins
        // this._svg.append("g")
        //     .attr("class", "vizart-scatter-guide")
        //     .append("line")
        //     .attr("x1", +selector.attr("cx"))
        //     .attr("x2", +selector.attr("cx"))
        //     .attr("y1", +selector.attr("cy"))
        //     .attr("y2", this._options.height)
        //     .style("stroke", selector.style("fill"))
        //     .style('stroke-dasharray', '10, 5')
        //     .transition()
        //     .delay(200)
        //     .duration(400)
        //     .styleTween("opacity",  interpolate(0, .7));
        //
        // this._svg.append("g")
        //     .attr("class", "vizart-scatter-guide")
        //     .append("line")
        //     .attr("x1", +selector.attr("cx"))
        //     .attr("x2", 0)
        //     .attr("y1", +selector.attr("cy"))
        //     .attr("y2", +selector.attr("cy"))
        //     .style("stroke", selector.style("fill"))
        //     .style('stroke-dasharray', '10, 5')
        //     .transition()
        //     .delay(200)
        //     .duration(400)
        //     .styleTween("opacity", interpolate(0, .7));

        // function to move mouseover item to front of SVG stage, in case
        // another bubble overlaps it
        selection.prototype.moveToFront = function () {
            return this.each(function () {
                this.parentNode.appendChild(this);
            });
        };

        // skip this functionality for IE9, which doesn't like it

        selector.moveToFront();

        tooltip.transition()
            .duration(Duration.TOOLTIP)
            .style("opacity", .9);

        let coordinates = mouse(this);
        let x = coordinates[0];
        let y = coordinates[1];

        let html = this._options.analytics.metrics.length > 1
            ? Tooltip.multiMetric(this._getDimension().name,
                this._getMetric().name,
                this._getRadius().name,
                this._getDimensionVal(d),
                this._getMetricValue(d),
                this._getRadiusValue(d),
                this._c(d))
            : Tooltip.noHandle(this._getDimension().name + ' ' +this. _getDimensionVal(d),
                this._getMetric().name,
                this._getMetricValue(d),
                this._c(d)
            );

        tooltip.style("left", (x + 80 + _z(d) + 5) + "px")
            .style("top", (y + 40) + "px")
            .html(html);
    };

    // what happens when we leave a bubble?
    mouseOff(d, i, isCircle) {
        tooltip.transition()
            .duration(Duration.TOOLTIP)
            .style("opacity", 0);


        // fade out guide lines, then remove them
        selectAll(".vizart-scatter-guide")
            .transition()
            .duration(100)
            .styleTween("opacity", function () {
                return interpolate(.7, 0);
            })
            .remove();
    };
}

export default Voronoi