import { genericColor } from '../color/index';

const apiColor = state => ({
  transitionColor(color) {
    state._options.color = color;
    state._color = genericColor(color);
  },
});

export default apiColor;
