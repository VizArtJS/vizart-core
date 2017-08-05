import Categorical from './categorical';
import Divergent from './divergent';
import Sequential from './sequential';
import * as Hcl from './hcl';

const Preset = {
    Categorical: Categorical,
    Divergent: Divergent,
    Sequential: Sequential,
    Hcl: Hcl
}

export default Preset;