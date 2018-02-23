import { drawQuadtree, drawVoronoi } from '../canvas';
import uuid from '../util/uuid';

import renderCanvas from './renderCanvas';

const canvas = chart =>
  Object.assign({}, chart, {
    _hiddenCanvasId: 'front-canvas' + uuid(),
    _frontCanvasId: 'hidden-canvas-' + uuid(),
    _frontCanvas: null,
    _hiddenCanvas: null,
    _frontContext: null,
    _hiddenContext: null,
    _detachedContainer: null,

    render(data) {
      this.data(data);

      const {
        detachedContainer,
        frontCanvas,
        hiddenCanvas,
        hiddenContext,
        frontContext,
        canvasScale,
        container,
        svg,
      } = renderCanvas(
        this._containerId,
        this._frontCanvasId,
        this._hiddenCanvasId,
        this._options
      );

      this._frontCanvas = frontCanvas;
      this._hiddenCanvas = hiddenCanvas;
      this._frontContext = frontContext;
      this._hiddenContext = hiddenContext;
      this._canvasScale = canvasScale;
      this._container = container;
      this._svg = svg;
      this._detachedContainer = detachedContainer;

      this._animate();
    },

    update() {
      this._animate();
    },

    revealVoronoi(color = '#ff5730') {
      drawVoronoi(this._frontContext, this._voronoi, color);
    },

    revealQuadtree(color = '#1f97e7') {
      drawQuadtree(this._frontContext, this._quadtree, color);
    },

    sort(accessor, direction) {
      this._options.ordering = {
        accessor: accessor,
        direction: direction,
      };

      this.update();
    },

    _animate() {},
  });

export default canvas;
