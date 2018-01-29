import categoricalColor from '../src/color/scale/categorical';
import { strictEqual } from 'assert';

describe('categorical color scale', () => {
    it('Blues for 2', () => {
        let scale = categoricalColor('Blues', 3).domain(["A", "B", "C"]);

        strictEqual(scale.range().length, 3);
        strictEqual(scale("A"), 'rgb(247, 251, 255)');
        strictEqual(scale("B"), 'rgb(109, 174, 213)');
        strictEqual(scale("C"), 'rgb(8, 48, 107)');
    });


    it('Cubehelix for 4', () => {
        const scale = categoricalColor('Cubehelix', 4).domain(["A", "B", "C", "D"]);

        strictEqual(scale.range().length, 4);
        strictEqual(scale("A"), 'rgb(0, 0, 0)');
        strictEqual(scale("B"), 'rgb(43, 111, 57)');
        strictEqual(scale("C"), 'rgb(212, 144, 198)');
        strictEqual(scale("D"), 'rgb(255, 255, 255)');
    });
});
