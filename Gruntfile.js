
var modRewrite = require('connect-modrewrite');
module.exports = function (grunt) {
    grunt.initConfig({

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/main.css': 'scss/style.scss'
                }
            }
        },

        watch: {
            files: ['*.html', 'app/**/*.html', 'app/**/**/*.html', 'app/**/**/**/*.html', 'app/*.js', 'app/**/*.js', 'app/**/**/*.js', 'scss/*.scss', 'css/*.css', 'Gruntfile.js'],
            tasks: [
                'sass',
                'concat:jsFiles',
                'concat:jsLib',
                'concat:cssFiles',
                'concat:cssLib',
                'ngtemplates',
                'uglify',
                'cssmin',
                'processhtml']
        },

        concat: {
            jsFiles: {
                options: {
                    separator: '\n;'
                },
                src: [
                    'app/app.module.js',
                    'app/app.filters.js',
                    'app/app.config.js',
                    'app/app.service.js',
                    'app/app.run.js',
                    'app/app.constant.js',
                    'app/user/userCtrl.js',
                    'app/venue/venueCtrl.js',
                ],
                dest: 'build/parkinglot/app/js/app.js'
            },
            jsLib: {
                options: {
                    separator: '\n;'
                },
                src: [
                    'node_modules/jquery/dist/jquery.js',
                    'node_modules/angular/angular.js',
                    'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
                    'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
                    'node_modules/angular-animate/angular-animate.min.js',
                    'node_modules/angular-sanitize/angular-sanitize.js',
                    'node_modules/angular-ui-router/release/angular-ui-router.min.js',
                    'node_modules/angular-ui-router/release/stateEvents.min.js',
                    'node_modules/popper.js/dist/umd/popper.min.js',
                    'node_modules/tether/dist/js/tether.min.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
                    'node_modules/angularjs-toaster/toaster.min.js',
                    'node_modules/moment/moment.js',
                    'node_modules/angularjs-bootstrap-datetimepicker/src/js/datetimepicker.js',
                    'node_modules/angularjs-bootstrap-datetimepicker/src/js/datetimepicker.templates.js',
                    'node_modules/angular-date-time-input/src/dateTimeInput.js',
                    'node_modules/angular-moment-picker/dist/angular-moment-picker.js',
                    'node_modules/angular-clockpicker/lib/angular-clockpicker.js',
                    'node_modules/angular-ui-tree/dist/angular-ui-tree.js'
                ],
                dest: 'build/parkinglot/lib/app.lib.js'
            },
            cssFiles: {
                options: {
                    separator: '\n'
                },
                src: [
                    'css/main.css'
                ],
                dest: 'build/parkinglot/app/css/app.css'
            },
            cssLib: {
                options: {
                    separator: '\n'
                },
                src: [
                    'node_modules/bootstrap/dist/css/bootstrap.min.css',
                    'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css',
                    'node_modules/angularjs-toaster/toaster.min.css',
                    'node_modules/angularjs-bootstrap-datetimepicker/src/css/datetimepicker.css',
                    'node_modules/angular-clockpicker/dist/angular-clockpicker.css',
                    'node_modules/angular-moment-picker/dist/angular-moment-picker.css',
                    'node_modules/angular-ui-tree/dist/angular-ui-tree.css'
                ],
                dest: 'build/parkinglot/lib/app.lib.css'
            }
        },
        processhtml: {
            options: {},
            dist: {
                files: [
                    { 'build/parkinglot/index.html': ['index.html'] }
                ]
            }
        },
        browserSync: {
            bsFiles: {
                src: [
                    '*.html',
                    'css/*.css',
                    'scss/*.scss',
                    'app/*.js',
                    'app/**/*.html',
                    'app/**/**/*.html',
                    'app/**/**/**/*.html',
                    'app/**/*.js',
                    'app/**/**/*.js',
                    'Gruntfile.js'
                ]
            },
            options: {
                debounceDelay: 1000,
                debugInfo: true,
                server: {
                    baseDir: './',
                    middleware: [
                        modRewrite([
                            '!\\.|\\.html$\\w+$ /index.html [L]'
                        ])
                    ],
                    index: "index.html"
                }
            }
        },
        uglify: {
            jsFiles: {
                files: {
                    'build/parkinglot/app/js/app.js': ['build/parkinglot/app/js/app.js'],
                    'build/parkinglot/lib/app.lib.js': ['build/parkinglot/lib/app.lib.js']
                }
            }
        },
        cssmin: {
            cssFiles: {
                files: [{
                    expand: true,
                    cwd: 'build/parkinglot/lib',
                    src: 'app.lib.css',
                    dest: 'build/parkinglot/lib'
                }, {
                    expand: true,
                    cwd: 'build/parkinglot/app/css',
                    src: 'app.css',
                    dest: 'build/parkinglot/app/css'
                }]
            }
        },
        ngtemplates: {
            parkinglot: {
                cwd: 'app',
                src: ['**/**.html', '**/**/**.html'],
                dest: 'build/parkinglot/app.templates.js',
                options: {
                    url: function (url) {
                        return 'app/' + url;
                    }
                }
            }
        },
        jsdoc: {
            dist: {
                src: ['app/*.js', 'app/**/*.js', 'app/**/**/*.js'],
                options: {
                    destination: 'doc'
                }
            }
        }
    });

    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-sass'); //For compiling sass to css
    grunt.loadNpmTasks('grunt-contrib-watch'); // For keeping track of changed files
    grunt.loadNpmTasks('grunt-contrib-concat'); // For concatinating js and css files
    grunt.loadNpmTasks('grunt-contrib-uglify'); // For minifying js files
    grunt.loadNpmTasks('grunt-contrib-cssmin'); // For minifying css files
    grunt.loadNpmTasks('grunt-processhtml'); // For generating index file for production with single js and css file
    grunt.loadNpmTasks('grunt-contrib-copy'); // To copy default static folder in build
    grunt.loadNpmTasks('grunt-angular-templates'); // For loading templates
    grunt.loadNpmTasks('grunt-browser-sync'); // For running code on your browser

    // Default task(s)
    grunt.registerTask('default', ['sass', 'browserSync']);
    grunt.registerTask('prod', ['watch']);
    // grunt.registerTask('dev', ['watch:dev']);
}