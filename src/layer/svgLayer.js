import defaultComposers from './default-composers';

import apiOn from '../api/on';
import apiColor from '../api/color';
import apiOptions from '../api/options';
import apiData from '../api/data';
import apiRender from '../api/renderSvg';
import apiUpdate from '../api/update';
import initState from '../api/state';

const svgLayer = (containerId, opt, composers) => {
  const state = initState(containerId, opt, Object.assign({}, defaultComposers, composers));

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

export default svgLayer;
