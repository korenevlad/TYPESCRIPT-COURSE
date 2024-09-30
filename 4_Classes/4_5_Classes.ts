// Классы (Абстрактные классы)

abstract class Logger {
    abstract log(message: string): void
    table(data: object){
        console.log(data)
    }
}

class MeassgaeLogger extends Logger{
    log(meassage: string): void{
        console.log(meassage)
    }
}

// const Logger = new Logger() // error

const logger = new MeassgaeLogger()

logger.log('Hello')
logger.table({a: 1, b: 2})