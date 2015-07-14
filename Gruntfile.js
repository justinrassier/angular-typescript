module.exports = function (grunt) {
  grunt.initConfig({
    ts: {
      default: {
        src: ["src/app.ts", "!node_modules/**/*.ts"],
        options: {
          module: "commonjs"
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.ts','srs/app.js'],
        tasks: ['default']
      }
    },
    copy: {
      main: {
        files: [{ expand: true, src: ['src/**/*.*', 'index.html'], dest: 'dist/' }]
      }
    },
    clean: {
      dist:  ['dist']
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.registerTask("default", ["clean", "ts", "copy", "watch"]);



  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
};

