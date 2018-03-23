import { drawQuadtree } from '../canvas/index';

const apiRevealQuadtree = state => ({
  revealQuadtree(color = '#1f97e7') {
    if (!state.hasOwnProperty(state, '_quadtree')) {
      console.error('quadtree is not enabled in chart');
      return;
    }

    drawQuadtree(state._frontContext, state._quadtree, color);
  },
});

export default apiRevealQuadtree;
