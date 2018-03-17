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

const _selectFromScheme = (interpolator, distinction) => {
  const scale = scaleSequential(interpolator);

  if (distinction <= 1) {
    return scale(1);
  } else {
    //https://github.com/d3/d3-array#range
    return range(distinction).map(d => scale(d / (distinction - 1)));
  }
};

const categoricalColor = (scheme, distinction = 0) => {
  if (!isString(scheme) && !isArray(scheme) && !isFunction(scheme)) {
    warn('color scheme is invalid: should be string, array or d3 interpolator');
    warn('MetroRain8 will be used by default');
      scheme = MetroRain8;
  }

    const selectNum = distinction <= 1 ? 12 : distinction;
  // warn('categorical number is invalid: should be larger than 0');
  // warn('12 will be used by default');

  if (isString(scheme)) {
    const colorSet =
      interpolateCategoricalScheme(scheme) ||
      interpolateSequentialScheme(scheme) ||
      interpolateDivergentScheme(scheme);

    if (colorSet != null) {
      if (isArray(colorSet)) {
        return scaleOrdinal().range(colorSet);
      } else {
        return scaleOrdinal().range(_selectFromScheme(colorSet, selectNum));
      }
    } else {
      return scaleOrdinal().range(MetroRain8);
    }
  } else if (isFunction(scheme)) {
    return scaleOrdinal().range(_selectFromScheme(scheme, selectNum));
  } else {
    return scaleOrdinal().range(scheme);
  }
};

export default categoricalColor;
