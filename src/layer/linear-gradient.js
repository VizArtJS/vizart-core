import isString from 'lodash-es/isString';
import isArray from 'lodash-es/isArray';
import { scaleSequential } from 'd3-scale';
import { range } from 'd3-array';
import { format } from 'd3-format';
import { equalIntervalBreaks } from 'simple-statistics';

import Duration from '..//util/transition';
import uuid from '../util/uuid';
import interpolatePreset from '../color/interpolator';

let formatter = format(".0%");
class LinearGradient {
    constructor(scheme) {
        this._id = uuid();
        this._scheme = scheme;
        this.colorStops = this._makeColorStops();
        this._layer;
    }

    get scheme() {
        return this._scheme;
    }

    set scheme(scheme) {
        this._scheme = scheme;
    }

    id() {
        return '#' + this._id;
    }

    render(_svg) {
        this._layer = _svg.append("linearGradient")
            .attr("id", this._id)
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", '0%')
            .attr("y1", '100%')
            .attr("x2", '0%')
            .attr("y2", '0%');

        this._layer
            .selectAll("stop")
            .data(this.colorStops)
            .enter()
            .append("stop")
            .attr("offset", (d) => { return d.offset; })
            .attr("stop-color", (d) => { return d.color; })
            .attr('stop-opacity', 1);
    }

    update(_scheme, _dataLength) {
        this._scheme = _scheme;
        this.colorStops = this._makeColorStops();

        this._layer
            .selectAll("stop")
            .data(this.colorStops)
            .transition()
            .duration(Duration.CHANGE)
            .delay((d, i)=> { return i / _dataLength * Duration.CHANGE; })
            .attr("offset",  (d)=> { return d.offset;  })
            .attr("stop-color", (d) => { return d.color; });
    }

    _makeColorStops() {
        let scheme = this._scheme;

        if (isString(scheme)) {
            let _seqScale = scaleSequential(interpolatePreset(scheme));
            _seqScale.domain([0, 1]); // explicit domain, not really need to do so

            let _data = range(0, 1, 0.1);
            _data.push(1); // range is 0-0.9

            return _data.map(d=>{
                return {
                    offset: formatter(d),
                    color: _seqScale(d)
                }
            });
        } else if (isArray(scheme)) {
            let count = scheme.length;

            if (count > 1) {
                let steps = equalIntervalBreaks([0, 1], count - 1);

                return steps.map((d, i)=>{
                    return  {
                        offset: formatter(d),
                        color: scheme[i]
                    }
                });
            } else {
                console.log('linear gradient requires at least two colors');
            }
        }
    }

    link(selector) {

    }

    top() {
        return this.colorStops[this.colorStops.length - 1].color;
    }
}
export default LinearGradient

