import budo from 'budo';
import babelify from 'babelify';
import hotModuleReloading from 'browserify-hmr';

budo('./index.js', {
  serve: 'bundle.js',
  live: '*.{css,html}',
  dir: [
    process.cwd(),
    'assets',
    'data'
  ],
  port: 8000,
  stream: process.stdout,
  browserify: {
    transform: babelify,
    plugin: hotModuleReloading
  }
});
