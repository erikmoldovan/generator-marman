module.exports = function(grunt) {
    'use strict';

    var path = require('path');
    var request = require('request'); // Need to be added into package.json
    var fs = require('fs');
    var modRewrite = require( 'connect-modrewrite' );

    var mountFolder = function (connect, dir) {
        return connect.static(require('path').resolve(dir));
    };

    grunt.initConfig({

        sass: {
            dist: {
                options: {
                    includePaths: ['scss'],
                    imagesDir: 'assets/img',
                    cssDir: 'assets/styles/css',
                    sourceComments: 'map',
                    sourceMap:'assets/styles/main.css.map'
                },
                files: {
                    'assets/styles/main.css':  'assets/styles/sass/main.scss'
                }
            }
        },
        watch: {
            sass: {
                files: 'assets/styles/sass/**/*.scss',
                tasks: ['sass']
            },
            css: {
                files: 'assets/styles/**/*.css',
                options: {
                    livereload: true
                }
            },
            javascript: {
                files: ['app/**/*.js', 'app/**/*.hbs'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            options: {
                port: 8000,
                hostname: 'localhost'
            },
            test: {
                options: {
                    debug: true,
                    middleware: function(connect) {
                        return[
                            modRewrite(['!\\.html|\\.hbs|\\.js|\\.css|\\.scss|\\.swf|\\.jp(e?)g|\\.png|\\.gif|\\.svg|\\.eot|\\.ttf|\\.woff$ /index.html']),
                            mountFolder(connect, '.')
                        ];
                    }
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('build', ['sass'] );


    grunt.registerTask('serve', function(){
        grunt.task.run(['connect:test', 'watch']);
    });
};
