import distinctColor from '../src/color/scale/distinct';
import { strictEqual } from 'assert';

describe('distinct color scale', () => {
    it('Blues', () => {
        let scale = distinctColor('Blues',  [0, 0.33, 0.66, 1]);
        strictEqual(scale(0), 'rgb(247, 251, 255)');
        strictEqual(scale(1), 'rgb(8, 48, 107)');
    });
});
