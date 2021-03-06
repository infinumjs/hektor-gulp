'use strict';

module.exports = function(gulp, H, options) {
  return function(callback) {
    try {
      H.loadDeps('connect');
      H.deps.connect.server({
        root: options.root,
        port: options.port,
        livereload: options.livereload
      });
      callback();
    } catch(e) {
      callback(e);
    }
  };
};
