import gulp from 'gulp';
import config from '../config';

const fontsBuild = () => (
  gulp.src(`${config.src.fonts}/**/*`)
    .pipe(gulp.dest(config.dest.fonts))
);

const faviconBuild = () => (
  gulp.src(`${config.src.favicons}/**/*`)
    .pipe(gulp.dest(config.dest.favicons))
);
const docsBuild = () => (
  gulp.src(`./src/assets/docs/**/*`)
    .pipe(gulp.dest('./build/docs'))
);

export const assetsBuild = gulp.parallel(fontsBuild, faviconBuild, docsBuild);

export const assetsWatch = () => {
  gulp.watch(`${config.src.fonts}/**/*`, fontsBuild);
  gulp.watch(`${config.src.favicons}/**/*`, faviconBuild);
  gulp.watch(`./src/assets/docs/**/*`, docsBuild);
};
