import type { Info, Warn, Error, Warning } from '@/protocols'
import winston, { type Logger as LoggerType } from 'winston'

export class LoggerAdapter implements Info, Error, Warn, Warning {
  private readonly logger: LoggerType = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.printf(({ timestamp, level, message }) => {
        return `${timestamp} ${level}: ${message}`
      })
    ),
    transports: [new winston.transports.Console()]
  })

  error = (message: string): void => {
    this.logger.error(message)
  }

  info = (message: string): void => {
    this.logger.info(message)
  }

  warn = (message: string): void => {
    this.logger.warn(message)
  }

  warning = (message: string): void => {
    this.logger.warning(message)
  }
}
