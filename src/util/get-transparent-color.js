import { hsl } from 'd3-color';

const transparent = (c, alpha) => {
  const hslColorSpace = hsl(c);
  hslColorSpace.opacity = alpha;

  return hslColorSpace;
};

export default transparent;
