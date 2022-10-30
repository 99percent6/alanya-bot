import { Logger } from '../interfaces/logger'

export class AppLogger implements Logger {
  private prefix: string = ''

  constructor(prefix: string = '') {
    this.prefix = prefix
  }

  log(...args): void {
    console.log(this.prefix, ...args)
  }

  error(...args): void {
    console.error(this.prefix, ...args)
  }

  info(...args): void {
    console.info(this.prefix, ...args)
  }

  warn(...args): void {
    console.warn(this.prefix, ...args)
  }
}
