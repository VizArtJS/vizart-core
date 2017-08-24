import isString from 'lodash-es/isString';
import isArray from 'lodash-es/isArray';
import isFunction from 'lodash-es/isFunction';
import { scaleOrdinal, scaleSequential } from 'd3-scale';
import { range } from 'd3-array';
import interpolateCategoricalScheme from '../interpolator/categorical';
import interpolateSequentialScheme from '../interpolator/sequential';
import interpolateDivergentScheme from '../interpolator/divergent';

import { warn } from '../../util/logger';
import { MetroRain8 } from '../preset/metropolis';

const _selectFromScheme =(interpolator, num)=> {
    const scale = scaleSequential(interpolator);

    if (num <= 1) {
        return scale(1)
    } else {
        //https://github.com/d3/d3-array#range
        return range(num).map(d=> scale(d/ (num - 1)));
    }
}

const categoricalColor = (scheme, _num = 0)=> {
    let _scheme = scheme;
    if(!isString(scheme) && !isArray(scheme) && !isFunction(scheme)) {
        warn('color scheme is invalid: should be string, array or d3 interpolator');
        warn('MetroRain8 will be used by default');
        _scheme = MetroRain8;
    }

    let selectNum = _num <=1 ? 12 : _num;
        // warn('categorical number is invalid: should be larger than 0');
        // warn('12 will be used by default');

    if (isString(_scheme)) {
        let colorSet = interpolateCategoricalScheme(_scheme)
            || interpolateSequentialScheme(_scheme)
            || interpolateDivergentScheme(_scheme);

        if (colorSet != null) {
            if (isArray(colorSet)) {
                return scaleOrdinal().range(colorSet);
            } else {
                return scaleOrdinal().range(_selectFromScheme(colorSet, selectNum));
            }
        } else {
            return scaleOrdinal().range(MetroRain8);
        }
    } else if (isFunction(_scheme)) {
        return scaleOrdinal().range(_selectFromScheme(_scheme, selectNum));
    } else {
        return scaleOrdinal().range(_scheme);
    }
}

export default categoricalColor;
