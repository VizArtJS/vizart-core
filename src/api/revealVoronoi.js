import { drawVoronoi } from '../canvas/index';

const apiRevealVoronoi = state => ({
  revealVoronoi(color = '#ff5730') {
    if (!state.hasOwnProperty(state, '_voronoi')) {
      console.error('voronoi is not enabled in chart');
      return;
    }

    drawVoronoi(state._frontContext, state._voronoi, color);
  },
});

export default apiRevealVoronoi;
