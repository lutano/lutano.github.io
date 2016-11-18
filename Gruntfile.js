/* global module:false */
module.exports = function(grunt) {
    var port = grunt.option('port') || 8000;
    // Project configuration

    // Dependencies
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var pathsConfig = {
        dev: '',
        prod: 'dist/'
    }

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        paths: pathsConfig,

        meta: {
            banner: '/*!\n' + ' * Luciano Spilotros - Front End Development <%= pkg.version %> \n' + ' * Last modified: (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' + ' *\n' + ' * Copyright (C) 2013 AS&K Digital \n' + ' */'
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            files: [
                '<%= paths.dev %>JS/custom/{,*/}*.js'
            ]
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    '<%= paths.dev %>js/vendor/jquery.min.js',
                    '<%= paths.dev %>js/vendor/bootstrap.js',
                    '<%= paths.dev %>js/vendor/smoothscroll.js',
                    '<%= paths.dev %>js/vendor/chart.js',
                    '<%= paths.dev %>js/custom/functions.js'
                ],
                dest: '<%= paths.dev %>js/main.js',
            },
        },

        uglify: {
            options: {
                banner: '<%= meta.banner %>\n',
                report: 'min'
            },
            custom: {
                src: '<%= paths.dev %>js/main.js',
                dest: '<%= paths.dev %>js/spillo.min.js'
            }
        },
        less: {
            masterStyles: {
                options: {
                    compress: true,
                    optimization: 2,
                    sourceMap: true,
                    sourceMapFilename: '<%= paths.dev %>css/spillo.css.map',
                    sourceMapURL: 'spillo.css.map',
                    sourceMapBasepath: '<%= paths.dev %>css/',
                    outputSourceFiles: true,
                    relativeUrls: true
                },
                files: {
                    // target.css file: source.less file
                    '<%= paths.dev %>css/spillo.min.css': '<%= paths.dev %>css/spillo.less'
                }
            }
        },
        connect: {
            dist: {
                options: {
                    port: port,
                    base: '',
                    open: true,
                    keepalive: true
                }
            }
        },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            css: {
                tasks: ['watch:styles', 'watch:js', 'watch:injects']
            }
        },
        watch: {
            default: {
                files: [
                    'index.html', 'index2_demo.html'
                ],
                options: {
                    livereload: true
                }
            },
            js: {
                files: [
                    '<%= paths.dev %>js/custom/functions.js',
                ],
                tasks: ['jshint', 'concat', 'uglify'],
                options: {
                    livereload: false
                }
            },
            styles: {
                files: [' <%= paths.dev %>css/{,*/}*.less'],
                tasks: ['less']
            },
            injects: {
                files: ['<%= paths.dev %>css/spillo.min.css', '<%= paths.dev %>js/spillo.min.js'],
                options: {
                    livereload: true
                }
            }

        }

    });


    //Default task
    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

    // JS files task
    grunt.registerTask('js', ['jshint', 'concat', 'uglify']);

    // Serve presentation locally
    grunt.registerTask('serve', ['default', 'connect:dev', 'watch']);

};
