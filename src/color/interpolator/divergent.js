import {
  interpolateBrBG,
  interpolatePRGn,
  interpolatePiYG,
  interpolatePuOr,
  interpolateRdBu,
  interpolateRdGy,
  interpolateRdYlBu,
  interpolateRdYlGn,
  interpolateSpectral,
} from 'd3-scale-chromatic';

import * as Preset from '../preset/divergent';

const interpolateDivergentScheme = _scheme => {
  switch (_scheme) {
    // categorical
    case Preset.SchemeBrBG:
      return interpolateBrBG;

    case Preset.SchemePRGn:
      return interpolatePRGn;

    case Preset.SchemePiYG:
      return interpolatePiYG;

    case Preset.SchemePuOr:
      return interpolatePuOr;

    case Preset.SchemeRdBu:
      return interpolateRdBu;

    case Preset.SchemeRdGy:
      return interpolateRdGy;

    case Preset.SchemeRdYlBu:
      return interpolateRdYlBu;

    case Preset.SchemeRdYlGn:
      return interpolateRdYlGn;

    case Preset.SchemeSpectral:
      return interpolateSpectral;

    default:
      return null;
  }
};

export default interpolateDivergentScheme;
