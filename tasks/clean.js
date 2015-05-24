var del = require('del');

module.exports = function(gulp, H, options) {
  gulp.task(options.taskName, function (cb) {
    if (options.paths) {
      del([].concat(options.paths), cb);
    } else {
      cb('Path is empty');
    }
  });
};
