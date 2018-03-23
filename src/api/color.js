import { genericColor } from '../color/index';

const apiColor = state => ({
  color(color) {
    state._options.color = color;
    state._color = genericColor(color);
  },
});

export default apiColor;
