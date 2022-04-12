module.exports = function(grunt) {
  const sass = require('node-sass');

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    config: {
      srcFolder: 'src',
      distFolder: 'dist'
    },

    browserSync: {
      bsFiles: {
        src : [
          '<%= config.distFolder %>/'
        ],
      },
      options: {
        server: '<%= config.distFolder %>/'
      }
    },

    watch: {
      scss: {
        expand: true,
        files: ['<%= config.srcFolder %>/*.scss'],
        tasks: ['sass', 'cssmin']
      }
    },

    sass: {
      app: {
        files: [{
          expand: true,
          cwd: '<%= config.srcFolder %>',
          src: ['**/*.scss'],
          dest: '<%= config.distFolder %>',
          ext: '.css'
        }],
        options: {
          implementation: sass,
        }
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '<%= config.distFolder %>',
          src: ['*.css', '!*.min.css'],
          dest: '<%= config.distFolder %>',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.registerTask('default', ['watch', 'browserSync']);
  grunt.registerTask('build', ['sass', 'cssmin']);
};