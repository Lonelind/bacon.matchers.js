module.exports = (grunt) ->
  grunt.initConfig
    coffee:
      bacon:
        files:
          "lib/Bacon.js": "src/lib/Bacon.coffee"
      matchers:
        options:
          bare: false
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
      bacon:
        files:
          "lib/Bacon.min.js": "lib/Bacon.js"

    coffeelint:
      app: ["src/*.coffee"]

  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-uglify"
  grunt.loadNpmTasks "grunt-coffeelint"

  grunt.registerTask "default",
  [
    "coffee:bacon", "uglify:bacon", "coffee:matchers", "uglify:matchers", "coffee:examples"
  ]







