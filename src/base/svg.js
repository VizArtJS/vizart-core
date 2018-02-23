import { dispatch } from 'd3-dispatch';
import 'd3-transition';
import values from 'lodash-es/values';

import uuid from '../util/uuid';
import mobileAndTabletCheck from '../util/mobile-check';

import { getBound } from '../util/container-size';
import { mergeOptions } from '../options';
import { genericColor } from '../color';

import renderSVG from './renderSVG';

const StandardDispatchers = {
  Rendered: 'rendered',
};

const chart = (containerId, opt, optComposer) => ({
  _isMobileSize: mobileAndTabletCheck(),
  _id: uuid(),
  _listeners: dispatch(values(StandardDispatchers)),
  _options: getBound(containerId, optComposer(opt)),
  _data: [],
  _color: null,
  _container: null,
  _containerId: containerId,

  render(data) {
    this.data(data);
    // this._color = this._provideColor();
    const { container, svg } = renderSVG(this._containerId, this._options);
    this._container = container;
    this._svg = svg;
  },

  data(data) {
    if (data !== undefined && data !== null) {
      this._data = data;
    }

    return this._data;
  },

  options(opt) {
    this._options = mergeOptions(this._options, opt);

    return this._options;
  },

  on(name, callback) {
    this._listeners.on(name, callback);
  },

  transitionColor(color) {
    this._options.color = color;
    this._color = genericColor(color);
  },
});

export default chart;
