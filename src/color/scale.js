import {
    scaleQuantile,
    scaleOrdinal,
    scaleLinear
} from 'd3-scale';

import { extent, max } from 'd3-array';

import isArray from 'lodash-es/isArray';
import isFunction from 'lodash-es/isFunction';
import isString from 'lodash-es/isString';
import map from 'lodash-es/map';

import ckmeans from './kmeans';
import Globals from '../base/Globals';
import {
    interpolateSequential,
    interpolateQuantile,
    interpolateCategorical
} from './interpolator';

/**
 *
 *
 * @param _data
 * @param _scheme
 * @returns {*}
 * @private
 */
let _smartSequential = function(_scheme, _data) {
    let _scale = scaleLinear();

    let schemeLen = _scheme.length;
    let dataLen = _data.length;

    let theDarkest = _scheme[schemeLen - 1];

    if (schemeLen === 0) {
        // nothing to do
    } else if (dataLen === 1) {
        // use the darkest
        _scale = scaleOrdinal().domain(_data[0]).range([theDarkest]);
    } else if (dataLen === schemeLen) {
        // use every single color
        _scale.domain(_data).range(_scheme);
    } else if (dataLen < schemeLen) {
        // sort data from the smallest to the largest

        let _trimmed = new Array(dataLen);

        let increment = (schemeLen - 1) / (dataLen - 1);
        let index = schemeLen - 1;

        for (let i = dataLen - 2; i > 0; i--) {
            index -= increment;
            _trimmed[i] = _scheme[i];
        }

        _trimmed[0] = _scheme[0];
        _trimmed[dataLen  - 1] = theDarkest;

        _scale.domain(_data).range(_trimmed);
    } else {
        // use kmeans
        let clusters = ckmeans(_data, schemeLen - 1);
        let breakpoints = clusters.map(d=> d[d.length - 1]);
        let _domain = [_data[0]].concat(breakpoints);

        _scale.domain(_domain).range(_scheme);
    }

    return _scale;
}

let makeColorScale = function(colorOptions, _data) {
    let _type = colorOptions.type;
    let _scheme = colorOptions.scheme;

    if (isFunction(_scheme) || isString(_scheme)) {
        // built-in
        switch (_type) {
            case Globals.ColorType.GRADIENT:
                return interpolateSequential(_scheme).domain(extent(_data));

            case Globals.ColorType.DISTINCT:
                let _valMap = _data
                    ? map(colorOptions.distinction, d=> max(_data) * (+d))
                    : colorOptions.distinction;

                return interpolateQuantile(_scheme, colorOptions.distinction).domain(_valMap);
            case Globals.ColorType.CATEGORICAL:
                return interpolateCategorical(_internalScale);

            default:
                console.log('color type is not supported ' + _type);
                break;
        }
    } else if (isArray(_scheme)) {
        switch (_type) {
            case Globals.ColorType.GRADIENT:
                return _smartSequential(_scheme, _data);

            case Globals.ColorType.DISTINCT:
                let _valMap = _data
                    ? map(colorOptions.distinction, d=> max(_data) * (+d))
                    : colorOptions.distinction;

                return scaleQuantile().domain(_valMap).range(_scheme);

            case Globals.ColorType.CATEGORICAL:
                return scaleOrdinal().range(_scheme);

            default:
                console.log('color type is not supported ' + _type);
                break;
        }
    }
}

export default makeColorScale;

