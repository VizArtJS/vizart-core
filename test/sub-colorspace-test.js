import { reduceToPalette, getSubColorSpace, HclSelector, IceCube } from '../src/color';
import { strictEqual, ok } from 'assert';
import isArray from 'lodash-es/isArray';

import keys from 'lodash-es/keys';

describe('Color Precision', () => {
  it('Ice Cube sub colorspace', () => {
      let palette = reduceToPalette(6, IceCube);
      strictEqual(palette.length, 6);
      let _selector = new HclSelector(IceCube);
      let sub = getSubColorSpace(palette, c=>_selector.validate(c.hcl));

      let subKeys = keys(sub);
      strictEqual(subKeys.length, 6);

      for (let d of subKeys) {
          ok(isArray(sub[d]));
      }
  });
});
