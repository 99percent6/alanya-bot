export class ApiError extends Error {
  statusCode: number = null

  constructor(message: string, statusCode?: number) {
    super(message)
    this.statusCode = statusCode
    Error.captureStackTrace(this, this.constructor)
  }
}
