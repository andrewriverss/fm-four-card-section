const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const buildStyles = () => {
    return src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError)) // Añadimos esto para ver si hay errores de Sass ocultos
        .pipe(dest('css'));
};

const watchTask = () => {
    watch(['scss/**/*.scss'], buildStyles);
};

exports.default = series(buildStyles, watchTask);