import { scaleOrdinal, scaleLinear, scaleSequential } from 'd3-scale';

import isFunction from 'lodash-es/isFunction';
import isString from 'lodash-es/isString';
import isArray from 'lodash-es/isArray';
import { extent } from 'd3-array';
import ckmeans from '../kmeans';
import interpolateSequentialScheme from '../interpolator/sequential';
import { warn } from '../../util/logger';
import { MetroRain3 } from '../preset/metropolis';

const _smartSequential = (_scheme, _data) => {
  let _scale = scaleLinear();

  let schemeLen = _scheme.length;
  let dataLen = _data.length;

  let theDarkest = _scheme[schemeLen - 1];

  if (schemeLen === 0) {
    // nothing to do
  } else if (dataLen === 1) {
    // use the darkest
    _scale = scaleOrdinal()
      .domain(_data[0])
      .range([theDarkest]);
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
    _trimmed[dataLen - 1] = theDarkest;

    _scale.domain(_data).range(_trimmed);
  } else {
    // use kmeans
    let clusters = ckmeans(_data, schemeLen - 1);
    let breakpoints = clusters.map(d => d[d.length - 1]);
    let _domain = [clusters[0][0]].concat(breakpoints);

    _scale.domain(_domain).range(_scheme);
  }

  return _scale;
};

const gradientColor = (scheme, _data) => {
  let _scheme;

  if (!isString(scheme) && !isArray(scheme) && !isFunction(scheme)) {
    warn('color scheme is invalid: should be string, array or d3 interpolator');
    warn('MetroRain3 will be used by default');
    _scheme = MetroRain3;
  } else {
    _scheme = scheme;
  }

  if (isString(_scheme)) {
    let _interpolated = interpolateSequentialScheme(_scheme);
    if (_interpolated === null) {
      warn('color scheme is not found');
      warn('MetroRain3 will be used by default');
      _scheme = MetroRain3;

      return _smartSequential(_scheme, _data);
    } else {
      return scaleSequential(_interpolated).domain(extent(_data));
    }
  } else if (isFunction(_scheme)) {
    return scaleSequential(_scheme).domain(extent(_data));
  } else if (isArray(_scheme)) {
    return _smartSequential(_scheme, _data);
  }
};

export default gradientColor;
