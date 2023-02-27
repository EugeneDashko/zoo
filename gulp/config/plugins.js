import replace from "gulp-replace"; //Поиск и замена. Плагин поможет с редактирование наших файлов
import plumber from "gulp-plumber"; // помогает обработать ошибки при работе с тем или иным фалом
import notify from "gulp-notify"; // будет выводить сообщения о тех же ошибках
import browsersync from "browser-sync"; // локальный сервер
import newer from "gulp-newer" //проверка обновления
import ifPlugin from "gulp-if" // условное ветвление (программирование)

// Объект, который будем экспортировать
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}


