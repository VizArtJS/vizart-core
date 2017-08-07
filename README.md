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
  * [Preset](#preset)
    * [Sequential: Single Hue](#sequential-single-hue)
    * [Sequential: Multi Hue](#sequential-multi-hue)
    * [Categorical](#categorical)
    * [Divergent](#divergent)
    
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


#### Sequential (Single Hue)

##### SchemeReds
'Reds'/d3.interpolateReds
<img height="20" width="100%" alt="Reds" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Reds.png"> 
##### SchemeBlues
'Blues'/d3.interpolateBlues
<img height="20" width="100%" alt="Blues" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Blues.png"> 
##### SchemeGreens
'Greens'/d3.interpolateGreens
<img height="20" width="100%" alt="Greens" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Greens.png"> 
##### SchemeGreys
'Greys'/d3.interpolateGreys
<img height="20" width="100%" alt="Greys" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Greys.png"> 
##### SchemeOranges
'Oranges'/d3.interpolateOranges
<img height="20" width="100%" alt="Oranges" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Oranges.png"> 
##### SchemePurples
'Purples'/d3.interpolatePurples
<img height="20" width="100%" alt="Purples" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Purples.png"> 

#### Sequential (Multi Hue)
##### SchemeBuGn
'BuGn'/d3.interpolateBuGn
<img height="20" width="100%" alt="BuGn" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/BuGn.png"> 
##### SchemeBuPu
'BuPu'/d3.interpolateBuPu
<img height="20" width="100%" alt="BuPu" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/BuPu.png"> 
##### SchemeGnBu
'GnBu'/d3.interpolateGnBu
<img height="20" width="100%" alt="GnBu" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/GnBu.png"> 
##### SchemeOrRd
'OrRd'/d3.interpolateOrRd
<img height="20" width="100%" alt="OrRd" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/OrRd.png"> 
##### SchemePuBuGn
'PuBuGn'/d3.interpolatePuBuGn
<img height="20" width="100%" alt="PuBuGn" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/PuBuGn.png"> 
##### SchemePuBu
'PuBu'/d3.interpolatePuBu
<img height="20" width="100%" alt="PuBu" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/PuBu.png"> 
##### SchemePuRd
'PuRd'/d3.interpolatePuRd
<img height="20" width="100%" alt="PuRd" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/PuRd.png"> 
##### SchemeRdPu
'RdPu'/d3.interpolateRdPu
<img height="20" width="100%" alt="RdPu" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/RdPu.png"> 
##### SchemeYlGnBu
'YlGnBu'/d3.interpolateYlGnBu
<img height="20" width="100%" alt="YlGnBu" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/YlGnBu.png"> 
##### SchemeYlGn
'YlGn'/d3.interpolateYlGn
<img height="20" width="100%" alt="YlGn" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/YlGn.png"> 
##### SchemeYlOrBr
'YlOrBr'/d3.interpolateYlOrBr
<img height="20" width="100%" alt="YlOrBr" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/YlOrBr.png"> 
##### SchemeYlOrRd
'YlOrRd'/d3.interpolateYlOrRd
<img height="20" width="100%" alt="YlOrRd" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/YlOrRd.png"> 
##### SchemeViridis
'Viridis'/d3.interpolateViridis
<img height="20" width="100%" alt="Viridis" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/viridis.png"> 
##### SchemeInferno
'Inferno'/d3.interpolateInferno
<img height="20" width="100%" alt="Inferno" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/inferno.png"> 
##### SchemeMagma
'Magma'/d3.interpolateMagma
<img height="20" width="100%" alt="Magma" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/magma.png"> 
##### SchemePlasma
'Plasma'/d3.interpolatePlasma
<img height="20" width="100%" alt="Plasma" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/plasma.png"> 
##### SchemeWarm
'Warm'/d3.interpolateWarm
<img height="20" width="100%" alt="Warm" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/warm.png"> 
##### SchemeCool
'Cool'/d3.interpolateCool
<img height="20" width="100%" alt="Cool" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/cool.png"> 
##### SchemeRainbow
'Rainbow'/d3.interpolateRainbow
<img height="20" width="100%" alt="Rainbow" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/rainbow.png"> 
##### SchemeCubehelix
'Cubehelix'/d3.interpolateCubehelix
<img height="20" width="100%" alt="Cubehelix" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/cubehelix.png"> 

#### Categorical
##### SchemeAccent
'Accent'/d3.schemeAccent
<img height="20" width="100%" alt="Accent" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Accent.png"> 
##### SchemeDark2
'Dark2'/d3.schemeDark2
<img height="20" width="100%" alt="Dark2" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Dark2.png"> 
##### SchemePaired
'Paired'/d3.schemePaired
<img height="20" width="100%" alt="Paired" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Paired.png"> 
##### SchemePastel1
'Pastel1'/d3.schemePastel1
<img height="20" width="100%" alt="Pastel1" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Pastel1.png"> 
##### SchemePastel2
'Pastel2'/d3.schemePastel2
<img height="20" width="100%" alt="Pastel2" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Pastel2.png"> 
##### SchemeSet1
'Set1'/d3.schemeSet1
<img height="20" width="100%" alt="Set1" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Set1.png"> 
##### SchemeSet2
'Set2'/d3.schemeSet2
<img height="20" width="100%" alt="Set2" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Set2.png"> 
##### SchemeSet3
'Set3'/d3.schemeSet3
<img height="20" width="100%" alt="Set3" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Set3.png"> 
##### SchemeCategory10
'Category10'/d3.schemeCategory10
<img height="20" width="100%" alt="Category10" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/category10.png"> 
##### SchemeCategory20
'Category20'/d3.schemeCategory20
<img height="20" width="100%" alt="Category20" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/category20.png"> 
##### SchemeCategory20b
'Category20b'/d3.schemeCategory20b
<img height="20" width="100%" alt="Category20b" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/category20b.png"> 
##### SchemeCategory20c
'Category20c'/d3.schemeCategory20c
<img height="20" width="100%" alt="Category20c" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/category20c.png"> 

#### Divergent
##### SchemeBrBG
'BrBG'/d3.interpolateBrBG
<img height="20" width="100%" alt="BrBG" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/BrBG.png"> 
##### SchemePRGn
'PRGn'/d3.interpolatePRGn
<img height="20" width="100%" alt="PRGn" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/PRGn.png"> 
##### SchemePiYG
'PiYG'/d3.interpolatePiYG
<img height="20" width="100%" alt="PiYG" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/PiYG.png"> 
##### SchemePuOr
'PuOr'/d3.interpolatePuOr
<img height="20" width="100%" alt="PuOr" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/PuOr.png"> 
##### SchemeRdBu
'RdBu'/d3.interpolateRdBu
<img height="20" width="100%" alt="RdBu" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/RdBu.png"> 
##### SchemeRdGy
'RdGy'/d3.interpolateRdGy
<img height="20" width="100%" alt="RdGy" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/RdGy.png"> 
##### SchemeRdYlBu
'RdYlBu'/d3.interpolateRdYlBu
<img height="20" width="100%" alt="RdYlBu" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/RdYlBu.png"> 
##### SchemeRdYlGn
'RdYlGn'/d3.interpolateRdYlGn
<img height="20" width="100%" alt="RdYlGn" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/RdYlGn.png"> 
##### SchemeSpectral
'Spectral'/d3.interpolateSpectral
<img height="20" width="100%" alt="Spectral" src="https://github.com/vizartjs/vizartjs.github.io/blob/master/img/color-scale/Spectral.png"> 


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details



