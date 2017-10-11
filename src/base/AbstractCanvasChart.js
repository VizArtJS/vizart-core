import { select } from 'd3-selection';

import {
    drawQuadtree,
    drawVoronoi
} from '../canvas';
import AbstractChart from './AbstractChart';
import uuid from '../util/uuid';

class AbstractCanvasChart extends AbstractChart {
    constructor(canvasId, _userOptions) {
        super(canvasId, _userOptions);

        this._fontCanvasId = 'front-canvas' + uuid();
        this._frontCanvasId = 'color-canvas-' + uuid();
        this._frontCanvas;
        this._hiddenCanvas;
        this._frontContext;
        this._hiddenContext;
        this._detachedContainer;
    }

    render(_data) {
        super.render(_data);

        this._detachedContainer = select(this._containerId).append('vizart-detached');

        const devicePixelRatio = window.devicePixelRatio || 1;

        this._frontCanvas = select(this._containerId)
            .append("canvas")
            .attr("id", this._fontCanvasId)
            .style('display', 'block')
            .style("width", this._options.chart.innerWidth + "px")
            .style("height", this._options.chart.innerHeight + "px")
            .style('margin', this._options.chart.margin.top + 'px 0 0 ' + this._options.chart.margin.left + 'px ')
            .attr('width', this._options.chart.innerWidth * devicePixelRatio)
            .attr('height', this._options.chart.innerHeight * devicePixelRatio);

        this._hiddenCanvas = select(this._containerId)
            .append("canvas")
            .attr("id", this._frontCanvasId)
            .style('display', 'none')
            .style("width", this._options.chart.innerWidth + "px")
            .style("height", this._options.chart.innerHeight + "px")
            .style('margin', this._options.chart.margin.top + 'px 0 0 ' + this._options.chart.margin.left + 'px ')
            .attr('width', this._options.chart.innerWidth * devicePixelRatio)
            .attr('height', this._options.chart.innerHeight * devicePixelRatio);

        this._hiddenContext = this._hiddenCanvas.node().getContext("2d");
        this._frontContext = this._frontCanvas.node().getContext('2d');

        this._hiddenContext.mozImageSmoothingEnabled = false;
        this._hiddenContext.webkitImageSmoothingEnabled = false;
        this._hiddenContext.msImageSmoothingEnabled = false;
        this._hiddenContext.imageSmoothingEnabled = false;


        const backingStoreRatio = this._frontContext.webkitBackingStorePixelRatio
            || this._frontContext.mozBackingStorePixelRatio
            || this._frontContext.msBackingStorePixelRatio
            || this._frontContext.oBackingStorePixelRatio
            || this._frontContext.backingStorePixelRatio
            || 1;

        const ratio = devicePixelRatio / backingStoreRatio;
        this._canvasScale = ratio;
        this._frontContext.scale(ratio, ratio);
        this._hiddenContext.scale(ratio, ratio);

        this._container
            .style('position', 'absolute')
            // .style('top', 0)
            // .style('left', 0)
            .style('pointer-events', 'none');

        this._animate();
    }

    update() {
        super.update();
        this._animate();
    }

    _animate() {

    }

    transitionColor(color) {
        this._options.color = color;

        this.update();
    }

    sort(accessor, direction) {
        this._options.ordering = {
            accessor: accessor,
            direction: direction
        };

        this.update();
    }

    revealVoronoi(color = "#ff5730") {
        drawVoronoi(this._frontContext, this._voronoi, color)
    }

    revealQuadtree(color = '#1f97e7'){
        drawQuadtree(this._frontContext, this._quadtree, color)
    }
}

export default AbstractCanvasChart;