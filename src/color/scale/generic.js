import map from 'lodash-es/map';
import { max } from 'd3-array';

import Globals from '../../base/Globals';

import gradientColor from './gradient';
import distinctColor from './distinct';
import divergentColor from './divergent';
import categoricalColor from './categorical';

import { warn } from '../../util/logger';

const genericColor = (_color, _data)=> {
    let _scheme = _color.scheme;
    let _type = _color.type;

    switch (_type) {
        case Globals.ColorType.GRADIENT:
            return gradientColor(_scheme, _data);

        case Globals.ColorType.DISTINCT:
            let _valMap = _data
                ? map(_color.distinction, d=> max(_data) * (+d))
                : _color.distinction;

            return distinctColor(_scheme, _valMap);

        case Globals.ColorType.DIVERGENT:
            return divergentColor(_scheme, _data);

        case Globals.ColorType.CATEGORICAL:
            return categoricalColor(_scheme);

        default:
            warn('color type should be gradient, distinct, divergent and categorical');
            break;
    }
}

export default genericColor
