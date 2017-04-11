module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                // separator: ' ; '
            },
            js: {
                // the files to concatenate
                src: ['src/js/*.js'],
                // the location of the resulting JS file
                dest: 'dist/js/script.min.js'
            },
            css: {
                // the files to concatenate
                src: ['src/css/*.css'],
                // the location of the resulting JS file
                dest: 'dist/css/style.min.css'
            }
        } ,
        uglify: {
            js: {
                files: {
                    'dist/js/script.min.js': ['dist/js/script.min.js']
                }
            }
                  }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['concat', 'uglify']);

};