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
               files: 'src/styles/**/*.scss',
               tasks: ['sass']
          }
     });

     grunt.loadNpmTasks('grunt-sass');
     grunt.loadNpmTasks('grunt-contrib-watch');

     grunt.registerTask('default', ['watch']);
     grunt.registerTask('compileSass', ['sass']);
}