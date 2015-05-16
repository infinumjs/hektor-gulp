module.exports = function(gulp, H, options) {
  options = options || false;

  gulp.task(options.taskName, function(callback) {
    try {
      H.deps.nodemon(options.config || {
        script: 'index.js',
        ext: 'js',
        ignore: [
          '.tmp/**',
          H.paths.app + '/*',
          H.paths.dist + '/*',
          'node_modules/*'
        ]
      });
      callback();
    } catch(e) {
      callback(e);
    }
  });
};
