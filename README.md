# vizart-core

vizart-core serves as fundamentals of all VizArt components.

* [Demo](https://vizartjs.github.io/demo.html) quick reference with source code
* [Documentation](https://github.com/VizArtJS/vizart-core/wiki)



## Usage:

1. Install

```
npm install vizart-core --save
```

2. ES6 Usage

```
import { generateColorPalette } from 'vizart-core';

```

## Development
1. Clone repository
2. Run commands
```
npm install         // install dependencies
npm run dev         // view demos in web browser at localhost:3005
npm run build       // build
npm run test        // run tests only
npm run test:cover  // run tests and view coverage report
```

## API
* [Color](#color)

### Color
#### Scientific Color
Color tool that is based on [IWantHue](http://tools.medialab.sciences-po.fr/iwanthue/) and [Chroma](https://github.com/gka/chroma.js/)
#### Preset
Color preset for great data visualization color scheme:
* [ColorBrewer](http://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3) as well as pre-defined schemes
* [CubeHelix](https://www.mrao.cam.ac.uk/~dag/CUBEHELIX/)

> Credit: Images of color scales are from [d3-scale](https://github.com/d3/d3-scale) and [d3-chromatic-scale](https://github.com/d3/d3-scale-chromatic/)

Three ways to use a preset:
1. Standard
``` 
import { SchemeBlues, Globals } from 'vizart-core';
const _color = {
  scheme: SchemeBlues,
  type: Globals.ColorType.SEQUENTIAL
}
```

2. Use d3 interpolator
``` 
import { Globals } from 'vizart-core';
import { interpolateCubehelixDefault } from 'd3-scale';
const _color = {
  scheme: interpolateCubehelixDefault,
  type: Globals.ColorType.SEQUENTIAL
}
```

3. Use string literals directly
``` 
const _color = {
  scheme: 'Blues',
  type: 'sequential'
}
```

4. Use customized scheme
``` 
const _color = {
  scheme: ['#ffc65f','#9eb778','#0096b6'],
  type: 'sequential'
}
```


1. Sequential
##### SchemeReds
'Reds'/d3.interpolateReds
<img alt="Reds" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Reds.png"> 
##### SchemeBlues
'Blues'/d3.interpolateBlues
<img alt="Blues" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Blues.png"> 
##### SchemeGreens
'Greens'/d3.interpolateGreens
<img alt="Greens" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Greens.png"> 
##### SchemeGreys
'Greys'/d3.interpolateGreys
<img alt="Greys" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Greys.png"> 
##### SchemeOranges
'Oranges'/d3.interpolateOranges
<img alt="Oranges" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Oranges.png"> 
##### SchemePurples
'Purples'/d3.interpolatePurples
<img alt="Purples" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Purples.png"> 
##### SchemeBuGn
'BuGn'/d3.interpolateBuGn
<img alt="BuGn" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/BuGn.png"> 
##### SchemeBuPu
'BuPu'/d3.interpolateBuPu
<img alt="BuPu" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/BuPu.png"> 
##### SchemeGnBu
'GnBu'/d3.interpolateGnBu
<img alt="GnBu" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/GnBu.png"> 
##### SchemeOrRd
'OrRd'/d3.interpolateOrRd
<img alt="OrRd" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/OrRd.png"> 
##### SchemePuBuGn
'PuBuGn'/d3.interpolatePuBuGn
<img alt="PuBuGn" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/PuBuGn.png"> 
##### SchemePuBu
'PuBu'/d3.interpolatePuBu
<img alt="PuBu" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/PuBu.png"> 
##### SchemePuRd
'PuRd'/d3.interpolatePuRd
<img alt="PuRd" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/PuRd.png"> 
##### SchemeRdPu
'RdPu'/d3.interpolateRdPu
<img alt="RdPu" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/RdPu.png"> 
##### SchemeYlGnBu
'YlGnBu'/d3.interpolateYlGnBu
<img alt="YlGnBu" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/YlGnBu.png"> 
##### SchemeYlGn
'YlGn'/d3.interpolateYlGn
<img alt="YlGn" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/YlGn.png"> 
##### SchemeYlOrBr
'YlOrBr'/d3.interpolateYlOrBr
<img alt="YlOrBr" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/YlOrBr.png"> 
##### SchemeYlOrRd
'YlOrRd'/d3.interpolateYlOrRd
<img alt="YlOrRd" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/YlOrRd.png"> 
##### SchemeViridis
'Viridis'/d3.interpolateViridis
<img alt="Viridis" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Viridis.png"> 
##### SchemeInferno
'Inferno'/d3.interpolateInferno
<img alt="Inferno" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Inferno.png"> 
##### SchemeMagma
'Magma'/d3.interpolateMagma
<img alt="Magma" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Magma.png"> 
##### SchemePlasma
'Plasma'/d3.interpolatePlasma
<img alt="Plasma" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Plasma.png"> 
##### SchemeWarm
'Warm'/d3.interpolateWarm
<img alt="Warm" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Warm.png"> 
##### SchemeCool
'Cool'/d3.interpolateCool
<img alt="Cool" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Cool.png"> 
##### SchemeRainbow
'Rainbow'/d3.interpolateRainbow
<img alt="Rainbow" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Rainbow.png"> 
##### SchemeCubehelix
'Cubehelix'/d3.interpolateCubehelix
<img alt="Cubehelix" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Cubehelix.png"> 
##### SchemeAccent
'Accent'/d3.interpolateAccent
<img alt="Accent" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Accent.png"> 
##### SchemeDark2
'Dark2'/d3.interpolateDark2
<img alt="Dark2" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Dark2.png"> 
##### SchemePaired
'Paired'/d3.interpolatePaired
<img alt="Paired" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Paired.png"> 
##### SchemePastel1
'Pastel1'/d3.interpolatePastel1
<img alt="Pastel1" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Pastel1.png"> 
##### SchemePastel2
'Pastel2'/d3.interpolatePastel2
<img alt="Pastel2" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Pastel2.png"> 
##### SchemeSet1
'Set1'/d3.interpolateSet1
<img alt="Set1" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Set1.png"> 
##### SchemeSet2
'Set2'/d3.interpolateSet2
<img alt="Set2" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Set2.png"> 
##### SchemeSet3
'Set3'/d3.interpolateSet3
<img alt="Set3" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Set3.png"> 
##### SchemeCategory10
'Category10'/d3.interpolateCategory10
<img alt="Category10" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Category10.png"> 
##### SchemeCategory20
'Category20'/d3.interpolateCategory20
<img alt="Category20" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Category20.png"> 
##### SchemeCategory20b
'Category20b'/d3.interpolateCategory20b
<img alt="Category20b" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Category20b.png"> 
##### SchemeCategory20c
'Category20c'/d3.interpolateCategory20c
<img alt="Category20c" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Category20c.png"> 
##### SchemeBrBG
'BrBG'/d3.interpolateBrBG
<img alt="BrBG" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/BrBG.png"> 
##### SchemePRGn
'PRGn'/d3.interpolatePRGn
<img alt="PRGn" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/PRGn.png"> 
##### SchemePiYG
'PiYG'/d3.interpolatePiYG
<img alt="PiYG" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/PiYG.png"> 
##### SchemePuOr
'PuOr'/d3.interpolatePuOr
<img alt="PuOr" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/PuOr.png"> 
##### SchemeRdBu
'RdBu'/d3.interpolateRdBu
<img alt="RdBu" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/RdBu.png"> 
##### SchemeRdGy
'RdGy'/d3.interpolateRdGy
<img alt="RdGy" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/RdGy.png"> 
##### SchemeRdYlBu
'RdYlBu'/d3.interpolateRdYlBu
<img alt="RdYlBu" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/RdYlBu.png"> 
##### SchemeRdYlGn
'RdYlGn'/d3.interpolateRdYlGn
<img alt="RdYlGn" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/RdYlGn.png"> 
##### SchemeSpectral
'Spectral'/d3.interpolateSpectral
<img alt="Spectral" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Spectral.png">


2. Categorical
3. Divergent
Built-in 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details



