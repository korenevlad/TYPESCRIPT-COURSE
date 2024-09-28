// Классы (Абстрактные классы)

 abstract class Logger {
    abstract log(meassage: string): void 

    table(data: object) {
        console.log(data)
    }
 }

 class MeassgaeLogger extends Logger{
    log2(message: string): void {
        console.log(message)
    }
 }

 // const Logger = new Logger() // error

 const logger = new MeassgaeLogger()

 logger.log2('Hello')
logger.table({a: 1, b: 2})