module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jasmine: {
      src: 'js/**/*.js',
      options: {
        specs: 'test/specs/**/*.js',
        helpers: 'test/helpers/**/*.js'
      }
    }
  });

  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('default', []);
};
