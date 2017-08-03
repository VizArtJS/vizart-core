import { select } from 'd3-selection';
import 'd3-transition';

import check from '../util/check';
import uuid from '../util/uuid';
import mobileAndTabletCheck from '../util/mobile-check';

import {
    sanitizeWidth,
    sanitizeHeight,
    availableWidth,
    availableHeight
} from '../util/container-size';
import { mergeOptions } from '../options';
import { makeColorScale } from '../color';

class AbstractChart {
    constructor(containerId, _userOptions) {
        this._isMobileSize = mobileAndTabletCheck();
        this._containerId = containerId;
        this._options = this.createOptions(_userOptions);
        this._options.chart.width = sanitizeWidth(this._options.chart.width, select(containerId));
        this._options.chart.height = sanitizeHeight(this._options.chart.height, select(containerId));
        this._options.chart.innerWidth = availableWidth(this._options.chart.width, select(containerId), this._options.chart.margin);
        this._options.chart.innerHeight = availableHeight(this._options.chart.height, select(containerId), this._options.chart.margin);

        this._data;
        this._colorScale;
    }


    render(_data) {
        this.data(_data);
        this._colorScale = this._provideColorScale();

        this._container = select(this._containerId).append("svg")
            .attr("width", this._options.chart.width)
            .attr("height", this._options.chart.height)
            .attr('class', 'vizart-chart');
        this._svg = this._container
            .append("g")
            .attr("transform", "translate(" + this._options.chart.margin.left + "," + this._options.chart.margin.top + ")");

    }

    update() {
        this._colorScale = this._provideColorScale();
    }

    data(_data) {
        if (check(_data) === true) {
            this._data = _data;
        }
        return this._data;
    };

    createOptions(_userOptions) {
        throw new Error('this is an abstract method')
    }


    options(_options) {
        if (check(_options) === true) {
            mergeOptions(this._options, _options);
        }

        return this._options;
    };


    transitionColor(colorOptions) {
        this._options.color = colorOptions;
        this._colorScale = this._provideColorScale();
    };

    _provideColorScale() {
        return makeColorScale(this._options.color);
    }

}

export default AbstractChart;
