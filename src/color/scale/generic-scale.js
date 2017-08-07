import {
    scaleQuantile,
    scaleOrdinal,
} from 'd3-scale';

import { max } from 'd3-array';
import map from 'lodash-es/map';

import Globals from '../../base/Globals';
import _smartSequential from './smart-sequential';


const _genericScale = (_color, _data) => {
    let _type = _color.type;
    let _scheme = _color.scheme;

    switch (_type) {
        case Globals.ColorType.GRADIENT:
            return _smartSequential(_scheme, _data);

        case Globals.ColorType.DISTINCT:
            let _valMap = _data
                ? map(_color.distinction, d => max(_data) * (+d))
                : _color.distinction;

            return scaleQuantile().domain(_valMap).range(_scheme);

        case Globals.ColorType.CATEGORICAL:
            return scaleOrdinal().range(_scheme);

        default:
            console.log('color type is not supported ' + _type);
            break;
    }
}

export default _genericScale;