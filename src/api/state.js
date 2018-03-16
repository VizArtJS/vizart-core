import { dispatch } from 'd3-dispatch';
import uuid from '../util/uuid';
import mobileAndTabletCheck from '../util/mobile-check';
import { getBound } from '../util/container-size';

const StandardDispatchers = {
  Rendered: 'rendered',
};

const initState = (containerId, opt, composers) => {
  return {
    _isMobileSize: mobileAndTabletCheck(),
    _id: uuid(),
    _listeners: dispatch(Object.values(StandardDispatchers)),
    _options: getBound(containerId, composers.opt(opt)),
    _data: [],
    _color: null,
    _container: null,
    _containerId: containerId,
    _composers: composers,
  };
};

export default initState;
