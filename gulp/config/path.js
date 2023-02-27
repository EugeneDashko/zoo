// получаем имя папки проекта, т.к. type: module, мы используем import
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve()); // в константу rootFolder получаем имя папки проекта my_gulp_2022

const buildFolder = `./dist`; /*путь ьк папке с результатом */
const srcFolder = `./src`; /* путь к папке с исходниками */


//все пути к папкам
export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`, // переносим файлы из srcFolder в buildFolder
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,wepb}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.*`, //bug
        files: `${srcFolder}/files/**/*.*`, //путь к папке с файлами которые будем копировать
        svgicons:`${srcFolder}/svgicons/*.svg`, // без отслеживания
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`, //pug
        images: `${srcFolder}/img/**/*.{jpg,jpeg,svg,png,gif,ico,wepb}`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    // ftp: `` //где мы сможем указвапть папку на удаленном ftp сервере

}
