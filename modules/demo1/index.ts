declare const defineModule: Function;

module.exports = defineModule('demo1', [], () => {
  return require('./app.ts');
});
