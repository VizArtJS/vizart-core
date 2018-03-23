import 'd3-transition';
import { genericColor } from '../color';

import apiOn from '../api/on';
import apiColor from '../api/color';
import apiOptions from '../api/options';
import apiData from '../api/data';
import apiRender from '../api/renderSvg';
import apiUpdate from '../api/update';
import initState from '../api/state';

const defaultComposers = {
  opt: null,
  data: (data, opt, cleanse) => data,
  color: (color, data, opt) => genericColor(color),
};

const svg = (containerId, opt, composers = defaultComposers) => {
  const state = initState(containerId, opt, composers);

  return Object.assign(
    state,
    apiOn(state),
    apiColor(state),
    apiOptions(state),
    apiData(state),
    apiRender(state),
    apiUpdate(state)
  );
};

export default svg;
