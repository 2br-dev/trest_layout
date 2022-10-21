const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const nodeSass = require('node-sass');
const sass = gulpSass(nodeSass);
const browserify = require('browserify');
const babelify = require('babelify');
const include = require('gulp-file-include');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sync = require('browser-sync').init({
    proxy: "http://trest.local"
    // server: {
    //     baseDir: "/release/"
    // }
})

gulp.task('js', function() {
    return browserify({
        extensions: ['.jsx', '.js', '.tsx'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true,
        entries: ['./src/js/master.js'],
      })
      .bundle()
      .on("error", function (err) { console.log("Error : " + err.message); })
      .pipe(source('master.js'))
      .pipe(gulp.dest('./release/js/'))
      .pipe(sync.stream());
  });

gulp.task( 'sass', function(){
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('./release/css/'))
        .pipe(sync.stream())
} )

gulp.task('include', function(){
	return gulp.src('./src/html/*.html')
		.pipe(include({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('./release/'));
})

gulp.task('html', function(){
	return gulp.src('./release/*.html')
		.pipe(sync.stream());
	});

gulp.task('watch', function(){
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('./release/*.html', gulp.series('html'));
    gulp.watch('./src/html/**/*.html', gulp.series('include'));
    gulp.watch('./src/js/*.js', gulp.series('js'));
});