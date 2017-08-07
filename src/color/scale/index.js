import isArray from 'lodash-es/isArray';
import isFunction from 'lodash-es/isFunction';
import isString from 'lodash-es/isString';

import _builtInScale from './built-in-scale';
import _genericScale from './generic-scale';

/**
 *
 *
 * @param _data
 * @param _scheme
 * @returns {*}
 * @private
 */

const makeColorScale = (_color, _data)=> {
    let _scheme = _color.scheme;

    if (isFunction(_scheme) || isString(_scheme)) {
        return _builtInScale(_color, _data);
    } else if (isArray(_scheme)) {
        return _genericScale(_color, _data)
    }
}

export default makeColorScale;

