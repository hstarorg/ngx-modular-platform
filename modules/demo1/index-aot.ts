module.exports = window['defineModule']('demo1', [], () => {
  return require('./app-aot.ts');
});
