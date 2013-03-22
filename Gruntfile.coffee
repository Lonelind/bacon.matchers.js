module.exports = (grunt) ->
  grunt.initConfig
    coffee:
      matchers:
        files:
          "bacon.matchers.js": "src/bacon.matchers.coffee"
      examples:
        expand: true
        cwd: "src/examples/"
        src: ["*.coffee"]
        dest: "examples/"
        ext: ".js"

    uglify:
      matchers:
        files:
          "bacon.matchers.min.js": "bacon.matchers.js"

    coffeelint:
      app: ["src/*.coffee"]

  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-uglify"
  grunt.loadNpmTasks "grunt-coffeelint"

  grunt.registerTask "default",
  [
    "coffee:matchers", "uglify", "coffee:examples"
  ]







