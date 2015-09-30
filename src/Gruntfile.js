// Wrapper function (required by grunt and its plugins)
// All configuration goes inside this function
module.exports = function(grunt) {

  // +*+*+*+*+*+*+*+*+*+*+*+*+
  //     Configure Grunt
  // +*+*+*+*+*+*+*+*+*+*+*+*+

  grunt.initConfig({

    // Get the configuration info from package.json this
    // way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // +*+*+*+*+*+*+*+*+*+*+*+*+
    //      Configurations
    // +*+*+*+*+*+*+*+*+*+*+*+*+

    // Configure jshint to validate js files --->
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // When this task is run, lint the Gruntfile and all js files in src
      build: ['Gruntfile.js', 'src/**/*.js']
    }
  });

  // +*+*+*+*+*+*+*+*+*+*+*+*+
  //    Load Grunt Plugins
  // +*+*+*+*+*+*+*+*+*+*+*+*+

  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
