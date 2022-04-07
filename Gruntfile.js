module.exports = function(grunt) {
  const sass = require('node-sass');

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dist: {
        files: {
          'simple-grid.css': 'simple-grid.scss'
        }
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          src: ['*.css', '!*.min.css'],
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.registerTask('build', ['sass', 'cssmin']);
};