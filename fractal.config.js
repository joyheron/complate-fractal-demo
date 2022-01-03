let fractal = module.exports = require('@frctl/fractal').create();
let complate = require('complate-fractal');
let path = require('path')

let componentsDir = path.resolve(__dirname, 'components');


fractal.components.engine(complate({
  rootDir: __dirname,
  generateURI: function(uri) {
    // NB: invocation context is `{ assetPath }`, providing access to
    //     Fractal-specific URI generation
    return this.assetPath(uri)
  }
}));
fractal.components.set('path', componentsDir);
fractal.components.set('ext', '.html');

console.log(fractal.components);
