var del = require('del');

module.exports = function(gulp, H, options) {
  return function () {
    if (options.paths && options.paths.length) {
      console.log([].concat(options.paths));
      return del([].concat(options.paths));
    } else {
      return Promise.reject('Path is empty');
    }
  };
};
