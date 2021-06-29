const gulp = require('gulp'),
    scss = require('gulp-sass'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    ftp = require('vinyl-ftp');

var server = require('gulp-server-livereload');

/* gulp.task('d', function() {
    var conn = ftp.create({
        host:      'ip.ip.ip.ip',
        user:      'userName',
        password:  'pass',
        parallel:  10,
        log: gutil.log
    });

    var globs = [
        './../dist/**',
        'dist/.htaccess',
    ];
    return gulp.src(globs, {buffer: false})
        .pipe(conn.dest('/www/app.webde5ign.ru/'));
}); */

gulp.task('scss', function () {
    return gulp.src('./styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(scss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('../dist/css/'));
});

gulp.task('css', function () {
    return gulp.src('./style/**/*.css')
        .pipe(gulp.dest('../dist/css/'));
});

gulp.task('html', function () {
    return gulp.src('./**/*.html')
        .pipe(gulp.dest('../dist/'))
});

gulp.task('img', function () {
    return gulp.src('./img/**/*.*')
        .pipe(gulp.dest('../dist/img'))
});

gulp.task('favicon', function () {
    return gulp.src('./favicon/**/*.*')
        .pipe(gulp.dest('../dist/'))
});

gulp.task('fonts', function () {
    return gulp.src('./fonts/**/*.*')
        .pipe(gulp.dest('../dist/fonts'))
});

gulp.task('js', function () {
    return gulp.src('./scripts/**/*.*')
        .pipe(gulp.dest('../dist/scripts'))
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.*', gulp.parallel('scss', 'favicon', 'html', 'css', 'img', 'fonts', 'js'));
});

gulp.task('webserver', function () {
    gulp.src('app')
        .pipe(server({
            livereload: true,
            directoryListing: true,
            open: false
        }));
});

gulp.task('serve', gulp.parallel('watch', () => gulp
        .src('./../dist/')
        .pipe(server({
            livereload: true,
            directoryListing: false,
            open: false,
            defaultFile: './index.html'
        }))
    )
);

gulp.task('default', gulp.parallel('scss', 'html', 'favicon', 'css', 'img', 'fonts', 'js', 'serve'));
