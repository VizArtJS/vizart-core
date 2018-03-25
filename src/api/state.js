import { dispatch } from 'd3-dispatch';
import uuid from '../util/uuid';
import isMobile from '../util/isMobile';
import assignContainerBound from '../util/measureContainer';
import mergeBase from '../options/mergeBase';

const StandardDispatchers = {
  Rendered: 'rendered',
};

const initOpt = (userOpt, composer) => {
    const { opt } = composer;

    if (typeof opt === 'function') {
        return opt(userOpt);
    } else if (Array.isArray(opt)){
        return mergeBase(...opt, userOpt);
    } else {
        return mergeBase(opt, userOpt);
    }
}

const initState = (containerId, opt, composers) => ({
    _isMobileSize: isMobile(),
    _id: uuid(),
    _listeners: dispatch(Object.values(StandardDispatchers)),
    _options: assignContainerBound(containerId, initOpt(opt, composers)),
    _data: [],
    _color: null,
    _container: null,
    _containerId: containerId,
    _composers: composers,
});

export default initState;
