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

const defaultComposers = {
  opt: null,
  data: (data, opt, cleanse) => data,
  color: (color, data, opt) => genericColor(color),
};

const chart = (containerId, opt, composers = defaultComposers) => ({
  _isMobileSize: mobileAndTabletCheck(),
  _id: uuid(),
  _listeners: dispatch(values(StandardDispatchers)),
  _options: getBound(containerId, composers.opt(opt)),
  _data: [],
  _color: null,
  _container: null,
  _containerId: containerId,

  render(data) {
    console.log('- 1 -  render svg ');
    this.data(data);
    this._color = composers.color(
      this._options.color,
      this._data,
      this._options
    );

    const { container, svg } = renderSVG(containerId, this._options);
    this._container = container;
    this._svg = svg;
  },

  update() {
    this._data = composers.data(this._data, this._options, false);
    this._color = composers.color(
      this._options.color,
      this._data,
      this._options
    );
  },

  data(data) {
    console.log(' - data 1 -  svg data');
    if (data !== undefined && data !== null) {
      this._data = composers.data(data, this._options, true);
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
