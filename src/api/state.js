import { dispatch } from 'd3-dispatch';
import uuid from '../util/uuid';
import isMobile from '../util/isMobile';
import assignContainerBound from '../util/measureContainer';

const StandardDispatchers = {
  Rendered: 'rendered',
};

const initState = (containerId, opt, composers) => ({
    _isMobileSize: isMobile(),
    _id: uuid(),
    _listeners: dispatch(Object.values(StandardDispatchers)),
    _options: assignContainerBound(containerId, composers.opt(opt)),
    _data: [],
    _color: null,
    _container: null,
    _containerId: containerId,
    _composers: composers,
});

export default initState;
