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
2. Categorical
3. Divergent
Built-in 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details



