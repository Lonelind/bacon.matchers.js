module.exports = (grunt) ->
  grunt.initConfig
    coffee:
      matchers:
        options:
          bare: true
        files:
          "bacon.matchers.js": "src/bacon.matchers.coffee"

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
    "coffee", "uglify:matchers"
  ]







