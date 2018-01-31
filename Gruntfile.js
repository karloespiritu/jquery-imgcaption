module.exports = function (grunt) {
  grunt.initConfig({
    // Import package manifest
    pkg: grunt.file.readJSON('imgcaption.jquery.json'),

    // Banner definitions
    meta: {
      banner:
        '/*\n' +
        ' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
        ' *  <%= pkg.description %>\n' +
        ' *  <%= pkg.homepage %>\n' +
        ' *\n' +
        " *  Copyright (c) <%= grunt.template.today('yyyy') %> <%= pkg.author.name %>\n" +
        ' *  Under <%= pkg.licenses[0].type %> License\n' +
        ' */\n'
    },

    // Minify definitions
    uglify: {
      my_target: {
        src: [ 'jquery.imgcaption.js' ],
        dest: 'jquery.imgcaption.min.js'
      },
      options: {
        banner: '<%= meta.banner %>'
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.registerTask('default', [ 'uglify' ])
}
