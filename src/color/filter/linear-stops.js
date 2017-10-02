import isFunction from 'lodash-es/isFunction';
import isString from 'lodash-es/isString';
import isArray from 'lodash-es/isArray';
import { range } from 'd3-array';
import { scaleSequential } from 'd3-scale';
import equalIntervalBreaks from './equal-interval-breaks';
import interpolateSequentialScheme from '../interpolator/sequential';
import { hsl } from 'd3-color';

const linearStops = (scheme, opacity =1)=> {
    if (isString(scheme) || isFunction(scheme)) {
        const interpolator = interpolateSequentialScheme(scheme);

        let offsets = range(0, 1, 0.1);
        offsets.push(1); // range is 0-0.9

        if (interpolator != null) {
            let seqScale = scaleSequential(interpolator).domain([0, 1]); // explicit domain, not really need to do so

            return offsets.map(d=>{
                return {
                    offset: d,
                    color: seqScale(d)
                }
            });
        } else {
            // fade out a single hue
            return offsets.map(d=>{
                let _hsl = hsl(scheme);
                _hsl.opacity = opacity * d;

                return {
                    offset: d,
                    color: _hsl
                }
            });
        }
    } else if (isArray(scheme)) {
        let count = scheme.length;

        if (count > 1) {
            let steps = equalIntervalBreaks([0, 1], count - 1);

            return steps.map((d, i)=>{
                return  {
                    offset: d,
                    color: scheme[i]
                }
            });
        } else {
            console.log('linear gradient requires at least two colors');
        }
    }
}

export default linearStops

