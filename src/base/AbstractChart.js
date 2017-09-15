import { select } from 'd3-selection';
import { dispatch } from 'd3-dispatch';
import 'd3-transition';
import values from 'lodash-es/values'

import check from '../util/check';
import uuid from '../util/uuid';
import exportPNG from '../util/export-png';
import mobileAndTabletCheck from '../util/mobile-check';

import { assignBound, resizeBound } from '../util/container-size';
import { mergeOptions } from '../options';
import { genericColor } from '../color';

const StandardDispatchers = {
    Rendered: 'rendered'
}

class AbstractChart {
    constructor(containerId, _userOptions) {
        this._isMobileSize = mobileAndTabletCheck();
        this._containerId = containerId;
        this._options = this.createOptions(_userOptions);

        assignBound(containerId, this._options);

        this._id = uuid();
        this._data;
        this._color;
        this._container;
        this._listeners = dispatch(values(StandardDispatchers));
    }

    render(_data) {
        this.data(_data);
        this._color = this._provideColor();

        this._container = select(this._containerId).append("svg")
            .attr("width", this._options.chart.width)
            .attr("height", this._options.chart.height)
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 " + this._options.chart.width + " " + this._options.chart.height)
            .classed("vizart-chart", true);

        this._svg = this._container
            .append("g")
            .attr("transform", "translate(" + this._options.chart.margin.left + "," + this._options.chart.margin.top + ")");

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

    on(_name, _callback) {
        this._listeners.on(_name, _callback);
    }

    resize(_size) {
        resizeBound(this._containerId, this._options, _size);

        this._container
            .attr("width", this._options.chart.width)
            .attr("height", this._options.chart.height);

        this._listeners.call('resize');
    }
    
    transitionColor(colorOptions) {
        this._options.color = colorOptions;
        this._color = this._provideColor();
    };

    _provideColor() {
        return genericColor(this._options.color);
    }

    export() {
        exportPNG(this);
    }
}

export default AbstractChart;
