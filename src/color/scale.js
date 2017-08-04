import {
    GRADIENT,
    DISTINCT,
    CATEGORICAL,
} from './type';

import interpolatePreset from './interpolator';

import {
    scaleSequential,
    scaleQuantile,
    scaleOrdinal,
    scaleLinear
} from 'd3-scale';

import { extent, max } from 'd3-array';

import isArray from 'lodash-es/isArray';
import isString from 'lodash-es/isString';
import map from 'lodash-es/map';

import ckmeans from './kmeans';


/**
 *
 *
 * @param _data
 * @param _scheme
 * @returns {*}
 * @private
 */
let _smartSequential = function(_data, _scheme) {
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
        let breakpoints = clusters.map((d)=> { return d[d.length - 1]});
        let _domain = [_data[0]].concat(breakpoints);

        _scale.domain(_domain).range(_scheme);
    }

    return _scale;
}


// todo quantile needs to bee refactored
let makeColorScale = function(colorOptions, _data = []) {
    let _type = colorOptions.type;
    let _scheme = colorOptions.scheme;

    let _scale;
    if (isString(_scheme)) {
        let _internalScale = interpolatePreset(_scheme);

        // built-in
        switch (_type) {
            case GRADIENT:
                _scale = scaleSequential(_internalScale);

                let _extent = extent(_data);
                _scale.domain(_extent);
                break;

            case DISTINCT:
                let scaleArr = [];

                for (let d of colorOptions.distinction) {
                    scaleArr.push(_internalScale(d));
                }
                _scale = scaleQuantile().range(scaleArr);

                let _valMap = colorOptions.distinction
                    ? map(colorOptions.distinction, function(d) {
                        return max(_data) * (+d);
                    })
                    : extent(_data);

                _scale.domain(_valMap);

                break;

            case CATEGORICAL:
                _scale = scaleOrdinal(_internalScale);
                break;
            default:
                console.log('color type is not supported ' + _type);

                break;
        }
    } else if (isArray(_scheme)) {
        switch (_type) {
            case GRADIENT:
                _scale = _smartSequential(_data, _scheme);

                break;

            case DISTINCT:
                _scale = scaleQuantile();

                let _valMap = colorOptions.distinction
                    ? map(colorOptions.distinction, function(d) {
                        return max(_data) * (+d);
                    })
                    : extent(_data);

                _scale.domain(_valMap);
                _scale.range(_scheme);
                break;

            case CATEGORICAL:
                _scale = scaleOrdinal().range(_scheme);

                break;

            default:
                console.log('color type is not supported ' + _type);

                break;
        }
    }


    return _scale;
}

export default makeColorScale;

