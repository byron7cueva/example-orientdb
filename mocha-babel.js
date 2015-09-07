require('babel/register')({
  only: '/test/',
  optional: ['es7.asyncFunctions'],
  extensions: [".es6", ".es", ".jsx", ".js"]
});
