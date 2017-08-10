import merge from 'lodash-es/merge';
import HclSelector from './util/HclSelector';
import { generate } from './palette-gen';

const DefaultOpt = {
    quality: 50,
    useFV: false,
    ultraPrecision: false,
    colorblind: false
};

const reduceToPalette = (_count, preset, _opt = DefaultOpt)=>{
    let _selector = new HclSelector(preset);

    let opt = merge(DefaultOpt, _opt);

    const q = opt.quality;
    const useFV = opt.useFV;
    const precision = opt.ultraPrecision;
    const dType = opt.colorblind ? 'Compromise': 'Default';

    const paletteSelector = color => _selector.validate(color.hcl());

    // Generate colors
    let colors = generate(_count, paletteSelector, useFV, q, precision, dType);

    return colors.map(color => {
        return {
            color: color,
            hex: color.hex(),
            hcl: color.hcl(),
            lab: color.lab()
        }
    });
}


export default reduceToPalette;
