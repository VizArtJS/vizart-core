import {
    scaleQuantile,
    scaleLinear,
    scaleSequential
} from 'd3-scale';
import { extent, ascending } from 'd3-array';

import isFunction from 'lodash-es/isFunction';
import isString from 'lodash-es/isString';
import isArray from 'lodash-es/isArray';

import interpolateSequentialScheme from '../interpolator/sequential';
import { warn } from '../../util/logger';
import { MetroRain3 } from '../preset/metropolis';

const _distinctStops = (scheme, distinction)=> {
    const _color = scaleSequential(scheme).domain(0, 1);
    const _standardize = scaleLinear().domain(extent(distinction)).range(0,1);
    return distinction.sort(ascending).map(d=> _color(_standardize(d)));
}

const distinctColor = (scheme, distinction = [0, 0.33, 0.66, 1])=> {
    if (distinction.length < 2) {
        warn('distinction  must contains at least 3 elements, [0, 0.33, 0.66, 1] will be used by default')
    }

    const _distinction = distinction.length < 2
        ? [0, 0.33, 0.66, 1]
        : distinction;

    let _scheme;

    if(!isString(scheme) && !isArray(scheme) && !isFunction(scheme)) {
        warn('color scheme is invalid: should be string, array or d3 interpolator');
        warn(' MetroRain3 will be used by default');
        _scheme = MetroRain3;
    } else {
        _scheme = scheme;
    }

    let _scale = scaleQuantile().domain(_distinction);

    if (isString(_scheme)) {
        const _interpolated = interpolateSequentialScheme(_scheme);

        if (_interpolated === null) {
            warn('color scheme is not found');
            warn('MetroRain3 will be used by default');

            _scheme = MetroRain3;
            _scale.range(_scheme);
        } else {
            _scale.range(_distinctStops(_interpolated, _distinction))
        }
    } else if (isFunction(_scheme)) {
        _scale.range(_distinctStops(_scheme, _distinction))
    } else if (isArray(_scheme)) {
        _scale.range(_scheme);
    }

    return _scale;
}

export default distinctColor;