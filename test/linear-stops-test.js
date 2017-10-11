import linearStops from '../src/color/filter/linear-stops';
import { strictEqual } from 'assert';

describe('linear stops', () => {
    it('Single color', () => {
        const stops = linearStops('#eb3ba6', 0.5);
    });
});
