const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('compilar-scss', () => {
  return gulp.src('scss/**/*.scss') // Ruta de tus archivos SCSS
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css')); // Carpeta de destino para los archivos CSS
});

gulp.task('default', gulp.series('compilar-scss'));

gulp.task('observar-scss', () => {
    gulp.watch('scss/**/*.scss', gulp.series('compilar-scss'));
  });
  