import isString from 'lodash-es/isString';
import isArray from 'lodash-es/isArray';
import { scaleSequential } from 'd3-scale';
import { range } from 'd3-array';
import { format } from 'd3-format';
import { equalIntervalBreaks } from 'simple-statistics';

import interpolatePreset from '../interpolator';

const formatter = format(".0%");

const linearStops =(scheme)=> {
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

export default linearStops

