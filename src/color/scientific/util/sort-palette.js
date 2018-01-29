import chroma from 'chroma-js';
import { diffSort } from '../palette-gen/index';
import sortRGB from './rgb-sort';

/**
 *
 *
 * @param palette
 * @param mode
 * @param type 'Compromise' or 'default'
 */
const sortPalette = function(colors, mode = 'difference', type = 'Default') {
  switch (mode) {
    case 'difference':
      return diffSort(colors, type);

      break;
    case 'hue':
      colors.sort((a, b) => {
        return a.hcl()[0] - b.hcl()[0];
      });

      return colors;
      break;
    case 'chroma':
      colors.sort((a, b) => {
        return a.hcl()[1] - b.hcl()[1];
      });

      return colors;
    case 'lightness':
      colors.sort((a, b) => {
        return a.hcl()[2] - b.hcl()[2];
      });

      return colors;
    case 'rgb':
      let res = sortRGB(colors.map(d => d.rgb()));

      return res.map(d => chroma.rgb(d));
    default:
      console.log('unknown sort mode');
      break;
  }
};

export default sortPalette;
