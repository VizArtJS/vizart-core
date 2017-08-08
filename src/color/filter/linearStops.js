import isFunction from 'lodash-es/isFunction';
import isString from 'lodash-es/isString';
import isArray from 'lodash-es/isArray';
import { range } from 'd3-array';
import { format } from 'd3-format';
import { scaleSequential } from 'd3-scale';

import equalIntervalBreaks from './equal-interval-breaks';
import interpolateSequentialScheme from '../interpolator/sequential';

const formatter = format(".0%");

const linearStops =(scheme)=> {
    if (isString(scheme) || isFunction(scheme)) {
        const _seqScale = scaleSequential(interpolateSequentialScheme(scheme)).domain([0, 1]); // explicit domain, not really need to do so

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

