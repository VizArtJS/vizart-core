import { max } from 'd3-array';

import Globals from '../../baseChart/Globals';

import gradientColor from './gradient';
import distinctColor from './distinct';
import divergentColor from './divergent';
import categoricalColor from './categorical';

import { warn } from '../../util/logger';

const genericColor = (color, data) => {
  let _scheme = color.scheme;
  let _type = color.type;

  switch (_type) {
    case Globals.ColorType.GRADIENT:
      return gradientColor(_scheme, data);

    case Globals.ColorType.DISTINCT:
      let _valMap = data
        ? color.distinction.map(d => max(data) * +d)
        : color.distinction;

      return distinctColor(_scheme, _valMap);

    case Globals.ColorType.DIVERGENT:
      return divergentColor(_scheme, data);

    case Globals.ColorType.CATEGORICAL:
      return categoricalColor(_scheme);

    default:
      warn('color type should be gradient, distinct, divergent or categorical');
      break;
  }
};

export default genericColor;
