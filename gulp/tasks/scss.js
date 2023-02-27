import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css'; // сжатие CSS файла
import webpcss from 'gulp-webpcss'; // вывод WEBP изображений
import autoprefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // группировка Медиазапросов


const sass = gulpSass(dartSass);


export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev}) // при возникновении ошибки будет показывать в каком именно файле
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>"
        })))
       .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(
        app.plugins.if(
            app.isBuild,
            groupCssMediaQueries()
        )
    )
    .pipe(
        app.plugins.if(
            app.isBuild,
            autoprefixer({
                grid: true,
                overrideBrowserlist: ["last 3 version"],
                cascade: true
            })
        )
    )
    .pipe(
        app.plugins.if(
            app.isBuild,
            webpcss(
                {
                    webpClass: ".webp",
                    noWebpClass: ".no-webp"
                }
            )
        )
    )
    .pipe(app.plugins.replace(/@img\//g, '../img/')) // обаботка алиасов ( меням @img на нормальную .../img/)
    .pipe(app.gulp.dest(app.path.build.css)) // выгружаем не сжатый фал стилей
    .pipe(
        app.plugins.if(
            app.isBuild,
            cleanCss()
        )
    )
    .pipe (cleanCss())
    .pipe (rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css)) // выгружаем сжатый фалй стилей
    .pipe(app.plugins.browsersync.stream())
}