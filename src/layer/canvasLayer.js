import uuid from '../util/uuid';

import apiOn from '../api/on';
import apiColor from '../api/color';
import apiOptions from '../api/options';
import apiData from '../api/data';
import apiRender from '../api/renderCanvas';
import apiUpdate from '../api/update';
import initState from '../api/state';
import apiRevealVoronoi from '../api/revealVoronoi';
import apiRevealQuadtree from '../api/revealQuadtree';

const CanvasState = {
  _hiddenCanvasId: 'hidden-canvas' + uuid(),
  _frontCanvasId: 'front-canvas-' + uuid(),
  _frontCanvas: null,
  _hiddenCanvas: null,
  _frontContext: null,
  _hiddenContext: null,
  _detachedContainer: null,
  _voronoi: null,
  _quadtree: null,
  _animationState: null,
};

const canvasLayer = (containerId, opt, composers = defaultComposers) => {
  const state = Object.assign(
    {},
    initState(containerId, opt, composers),
    CanvasState
  );

  return Object.assign(
    state,
    apiOn(state),
    apiColor(state),
    apiOptions(state),
    apiData(state),
    apiRevealVoronoi(state),
    apiRevealQuadtree(state),
    apiRender(state),
    apiUpdate(state)
  );
};

export default canvasLayer;
