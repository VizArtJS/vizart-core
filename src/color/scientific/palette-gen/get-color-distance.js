import simulate from './simulate';

// http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CMC.html
const _cmcDistance =(lab1, lab2, l, c)=> {
    let L1 = lab1[0]
    let L2 = lab2[0]
    let a1 = lab1[1]
    let a2 = lab2[1]
    let b1 = lab1[2]
    let b2 = lab2[2]
    let C1 = Math.sqrt(Math.pow(a1, 2) + Math.pow(b1, 2))
    let C2 = Math.sqrt(Math.pow(a2, 2) + Math.pow(b2, 2))
    let deltaC = C1 - C2
    let deltaL = L1 - L2
    let deltaa = a1 - a2
    let deltab = b1 - b2
    let deltaH = Math.sqrt(Math.pow(deltaa, 2) + Math.pow(deltab, 2) + Math.pow(deltaC, 2))
    let H1 = Math.atan2(b1, a1) * (180 / Math.PI)
    while (H1 < 0) { H1 += 360 }
    let F = Math.sqrt( Math.pow(C1, 4) / ( Math.pow(C1, 4) + 1900 ) )
    let T = (164 <= H1 && H1 <= 345) ? ( 0.56 + Math.abs(0.2 * Math.cos(H1 + 168)) ) : ( 0.36 + Math.abs(0.4 * Math.cos(H1 + 35)) )
    let S_L = (lab1[0]<16) ? (0.511) : (0.040975 * L1 / (1 + 0.01765 * L1) )
    let S_C = (0.0638 * C1 / (1 + 0.0131 * C1)) + 0.638
    let S_H = S_C * (F*T + 1 - F)
    let result = Math.sqrt( Math.pow(deltaL/(l*S_L), 2) + Math.pow(deltaC/(c*S_C), 2) + Math.pow(deltaH/S_H, 2) )
    return result
}

const _euclidianDistance =(lab1, lab2)=> {
    return Math.sqrt(Math.pow(lab1[0]-lab2[0], 2)
        + Math.pow(lab1[1]-lab2[1], 2)
        + Math.pow(lab1[2]-lab2[2], 2));
}

const compromiseDistance =(lab1, lab2)=> {
    let distances = []
    let coeffs = []
    distances.push(_cmcDistance(lab1, lab2, 2, 1))
    coeffs.push(1000)
    const types = ['Protanope', 'Deuteranope', 'Tritanope'];

    for (let type of types) {
        let lab1_cb = simulate(lab1, type);
        let lab2_cb = simulate(lab2, type);
        if( !(lab1_cb.some(isNaN) || lab2_cb.some(isNaN)) ) {
            let c
            switch (type) {
                case('Protanope'):
                    c = 100;
                    break;
                case('Deuteranope'):
                    c = 500;
                    break;
                case('Tritanope'):
                    c = 1;
                    break;
            }
            distances.push(_cmcDistance(lab1_cb, lab2_cb, 2, 1))
            coeffs.push(c)
        }
    }

    let total = 0
    let count = 0
    distances.forEach(function(d, i){
        total += coeffs[i] * d
        count += coeffs[i]
    })
    return total / count;
}

const distanceColorblind =(lab1, lab2, type)=> {
    let lab1_cb = simulate(lab1, type);
    let lab2_cb = simulate(lab2, type);
    return _cmcDistance(lab1_cb, lab2_cb, 2, 1);
}

const getColorDistance = (lab1, lab2, _type = 'Default')=> {
    switch (_type) {
        case 'Default':
            return _euclidianDistance(lab1, lab2);
        case 'Euclidian':
            return _euclidianDistance(lab1, lab2);
        case 'CMC':
            return _cmcDistance(lab1, lab2, 2, 1);
        case 'Compromise':
            return compromiseDistance(lab1, lab2);
        default:
            return distanceColorblind(lab1, lab2, _type);
    }
}

export default getColorDistance;