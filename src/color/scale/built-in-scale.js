import { extent, max } from 'd3-array';

import {
    interpolateSequential,
    interpolateQuantile,
    interpolateCategorical
} from '../interpolator/index';
import Globals from '../../base/Globals';

const _builtInScale = (_color, _data)=> {
    let _type = _color.type;
    let _scheme = _color.scheme;

    switch (_type) {
        case Globals.ColorType.GRADIENT:
            return interpolateSequential(_scheme).domain(extent(_data));

        case Globals.ColorType.DISTINCT:
            let _valMap = _data
                ? map(_color.distinction, d=> max(_data) * (+d))
                : _color.distinction;

            return interpolateQuantile(_scheme, _color.distinction).domain(_valMap);
        case Globals.ColorType.CATEGORICAL:
            return interpolateCategorical(_scheme);

        default:
            console.log('color type is not supported ' + _type);
            break;
    }
}

export default _builtInScale;