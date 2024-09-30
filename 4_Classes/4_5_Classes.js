"use strict";
// Классы (Абстрактные классы)
class Logger {
    table(data) {
        console.log(data);
    }
}
class MeassgaeLogger extends Logger {
    log(meassage) {
        console.log(meassage);
    }
}
// const Logger = new Logger() // error
const logger = new MeassgaeLogger();
logger.log('Hello');
logger.table({ a: 1, b: 2 });
