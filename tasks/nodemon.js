module.exports = function(gulp, H, options) {
  return function(callback) {
    try {
      H.loadDeps('nodemon');
      H.deps.nodemon({
        script: options.script,
        ext: options.ext,
        ignore: options.ignore,
        tasks: options.tasks,
        env: options.env
      });
      callback();
    } catch(e) {
      callback(e);
    }
  };
};
