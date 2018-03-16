import { reduceToPalette, getSubColorSpace, HclSelector, IceCube } from '../src/color';
import { strictEqual, ok } from 'assert';

describe('Color Precision', () => {
  it('Ice Cube sub colorspace', () => {
      const palette = reduceToPalette(6, IceCube);
      strictEqual(palette.length, 6);
      const _selector = new HclSelector(IceCube);
      const sub = getSubColorSpace(palette, c=>_selector.validate(c.hcl));

      const subKeys = Object.keys(sub);
      strictEqual(subKeys.length, 6);

      for (let d of subKeys) {
          ok(Array.isArray(sub[d]));
      }
  });
});
