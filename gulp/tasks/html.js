import fileInclude from "gulp-file-include"; //подлючаем 
import webpHtmlNosvg from "gulp-webp-html-nosvg";// оборовичает в picture и еще кое что.webp при сжимании фото не уменьшает их качество
import versionNumber from "gulp-version-number" // добавляет к моим факлам ключ, который не позволит кешировать их праузером


export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber( // выводим сообщения при возникновении ошибок
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%- error.massage %>"
            }))
        )
        .pipe (fileInclude())
        .pipe(app.plugins.replace(/@img\//g, 'img/')) //вместо @img будем получать просто img (о вложенностях .html)
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpHtmlNosvg()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                 versionNumber({
                        'value': '%DT%',
                        'append': {
                            'key': '_V',
                            'cover': 0,
                            'to': [
                                'css',
                                'js',
                                ]
                            },
                            'output': {
                                'file': 'gulp/version.json'
                            }
                    })
                )
        )
        
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream())
}