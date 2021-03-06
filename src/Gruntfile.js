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
    },

    // configure uglify to minify js files
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/js/magic.min.js': 'src/js/magic.js'
        }
      }
    },

    // compile less stylesheets to css 
    less: {
      build: {
        files: {
          'dist/css/pretty.css': 'src/css/pretty.less'
        }
      }
    },

    // configure cssmin to minify css files 
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/css/style.min.css': 'src/css/style.css'
        }
      }
    }
  });

  // +*+*+*+*+*+*+*+*+*+*+*+*+
  //    Register My Tasks
  // +*+*+*+*+*+*+*+*+*+*+*+*+
  
  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'less']);

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
