import { select } from 'd3-selection';
import { dispatch } from 'd3-dispatch';
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

        this._id = uuid();
        this._data;
        this._color;
        this._listeners = dispatch();
    }


    render(_data) {
        this.data(_data);
        this._color = this._provideColor();

        this._container = select(this._containerId).append("svg")
            .attr("width", this._options.chart.width)
            .attr("height", this._options.chart.height)
            .attr('class', 'vizart-chart');
        this._svg = this._container
            .append("g")
            .attr("transform", "translate(" + this._options.chart.margin.left + "," + this._options.chart.margin.top + ")");

    }

    on(_name, _callback) {
        this._listeners.on(_name, _callback);
    }

    update() {
        this._color = this._provideColor();
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
        this._color = this._provideColor();
    };

    _provideColor() {
        return makeColorScale(this._options.color);
    }

}

export default AbstractChart;
