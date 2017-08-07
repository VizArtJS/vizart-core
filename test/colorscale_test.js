import { reduceToPalette, getSubColorSpace, HclSelector, IceCube } from '../src/color';
import { strictEqual } from 'assert';

describe('color scale', () => {
  it('make a gradient scale', () => {
      let palette = reduceToPalette(6, IceCube);
      console.log(palette);
      let _selector = new HclSelector(IceCube);


      let sub = getSubColorSpace(palette, function (c) {
          return _selector.validate(c.hcl);
      });
      console.log(sub);
  });


});
