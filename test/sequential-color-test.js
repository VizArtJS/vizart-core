import gradientColor from '../src/color/scale/gradient';
import { MetroRain3 } from '../src/color/preset/metropolis';
import { strictEqual } from 'assert';
import { scaleSequential, interpolateCubehelixDefault } from 'd3-scale';
import { interpolateBlues } from 'd3-scale-chromatic';
import { color } from 'd3-color';

describe('gradient color scale', () => {
    it('Blues', () => {
        let scale = gradientColor('Blues', [0, 1, 2, 3,4,5,6]);
        strictEqual(scale(0), scaleSequential(interpolateBlues)(0))
        strictEqual(scale(6), scaleSequential(interpolateBlues)(1))
    });

    it('CubeHelix', () => {
        let scale = gradientColor('Cubehelix', [0, 1, 2, 3,4,5,6]);
        strictEqual(scale(0), scaleSequential(interpolateCubehelixDefault)(0))
        strictEqual(scale(6), scaleSequential(interpolateCubehelixDefault)(1))
    });

    it('Metropolis Rain 3', () => {
        let scale = gradientColor(MetroRain3, [0, 1, 2, 3,4,5,6]);
        strictEqual(scale(0), color(MetroRain3[0]).rgb().toString());
        strictEqual(scale(6), color(MetroRain3[2]).rgb().toString());
    });
});
