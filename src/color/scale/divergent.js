import { scaleSequential } from 'd3-scale';

import isFunction from 'lodash-es/isFunction';
import isString from 'lodash-es/isString';
import isArray from 'lodash-es/isArray';
import interpolateDivergentScheme from '../interpolator/divergent';
import { warn } from '../../util/logger';
import { SchemeRdYlGn } from '../preset/divergent';

const divergentColor = scheme => {
  warn('divergent not implemented yet');

  let _scheme;
  if (!isString(scheme) && !isArray(scheme) && !isFunction(scheme)) {
    warn('color scheme is invalid: should be string, array or d3 interpolator');
    warn('SchemeRdYlGn will be used by default');
    _scheme = SchemeRdYlGn;
  } else {
    _scheme = scheme;
  }

  if (isString(_scheme)) {
    const _interpolated = interpolateDivergentScheme(_scheme);

    if (_interpolated === null) {
      warn('color scheme is not found');
      warn('SchemeRdYlGn will be used by default');

      _scheme = SchemeRdYlGn;
      return scaleSequential(interpolateDivergentScheme(_scheme));
    } else {
      return scaleSequential(_interpolated);
    }
  } else if (isFunction(_scheme)) {
    return scaleSequential(_scheme);
  } else {
    return null;
  }
};

export default divergentColor;
