import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss'
import localResolve from 'rollup-plugin-local-resolve';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import json from 'rollup-plugin-json';

export default {
    entry: 'src/index.js',
    plugins: [
        json({
            exclude: [ 'node_modules' ],
            preferConst: true,
        }),
        localResolve(),
        postcss({ extract: 'dist/vizart-core.css' }),
        babel(babelrc()),
        resolve({
            module: true,
            jsnext: true,
            main: true,
            extensions: ['.js']
        }),
        commonjs({
            namedExports: {
                'node_modules/simple-statistics/index.js': [ 'ckmeans', 'equalIntervalBreaks' ]
            }
        }),
        serve({
            open: true,
            verbose: true,
            contentBase: ['demo', 'dist'],
            historyApiFallback: false,
            host: 'localhost',
            port: 3004
        }),
        livereload({
            watch: 'demo',
            verbose: false
        })
    ],
    external: [],
    targets: [
        {
            dest: 'dist/vizart-core.standalone.js',
            format: 'umd',
            moduleName: 'VizArtCore',
            sourceMap: true
        }
    ]
};