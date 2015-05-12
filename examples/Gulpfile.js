var gulp = require('gulp');

// H is an object with following properties:
// * deps (HEKTOR's gulp deps)
// * tasks (loaded HEKTOR tasks)
// * run - https://www.npmjs.com/package/run-sequence
// * paths - app, dist (used in task options)
var H = require('hektor-gulp')(gulp, { app: 'app', dist: 'dist'}).load({
  styles: {
    browsers: ['chrome 40', 'ios 7']
  },
  scripts: {
    aliasify: {
      aliases: {
        underscore: 'lodash'
      }
    }
  },
  serve: {}
});

// Load receives a task name, array of task names or object with taskName: taskOptions
// var H = require('hektor-gulp')(gulp).load('styles');

gulp.task('scss', ['styles'], function() {}); // Alias for styles, could also contain other tasks