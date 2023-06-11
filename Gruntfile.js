module.exports = function(grunt){
     grunt.initConfig({
          sass: {
               options: {
                    implementation: require('node-sass'),
                    sourceMap: true,
                    outputStyle: 'compressed'
               },
               file: {
                    src: 'src/styles/main.scss',
                    dest: 'dist/styles/main.min.css'
               }
          },
          watch: {
               sass: {
                    files: 'src/styles/**/*.scss',
                    tasks: ['sass']
               },
               html: {
                    files: './src/index.html',
                    tasks: ['htmlmin:dist', 'replace:dist', 'clean', 'imagemin']
               },
               javascript: {
                    files: './src/scripts/*.js',
                    tasks: ['uglify']
               }

          },
          replace: {
               dist: {
                    options: {
                         patterns: [
                              {
                                   match: 'ENDERECO_DO_CSS',
                                   replacement: './styles/main.min.css'
                              },
                              {
                                   match: 'ENDERECO_DO_JS',
                                   replacement: './scripts/main.min.js'
                              }
                         ]
                    },
                    files: [
                         {
                              expand: true,
                              flatten: true,
                              src: ['prebuild/index.html'],
                              dest: 'dist/'
                         }
                    ]
               }
          },
          htmlmin: {
               dist: {
                    options: {
                         removeComments: true,
                         collapseWhitespace: true
                    },
                    files: {
                         'prebuild/index.html': 'src/index.html'
                    }
               }
          },
          imagemin: {
               dynamic: {
                    files: [
                         {
                              expand: true,
                              cwd: 'src/images/', // Diretório de origem das imagens
                              src: ['**/*.{png,jpg,gif,svg}'], // Tipos de arquivo a serem otimizados
                              dest: 'dist/images/' // Diretório de destino para as imagens otimizadas
                         }
                    ]
               }
          },
          clean: ['prebuild'],
          uglify: {
               target: {
                    files: {
                         'dist/scripts/main.min.js': 'src/scripts/main.js'
                    }
               }
          }
     });

     grunt.loadNpmTasks('grunt-sass');
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-replace');
     grunt.loadNpmTasks('grunt-contrib-htmlmin');
     grunt.loadNpmTasks('grunt-contrib-clean');
     grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.loadNpmTasks('grunt-contrib-imagemin');

     grunt.registerTask('default', ['watch']);
}