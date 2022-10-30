import { Response } from 'express'

export class HttpHandler {
  public static sendResponse(
    { res, result = null, error = null, code = 200, headers = null }
    : { res: Response, result?: any, error?: any, code?: number, headers?: Record<string, string> },
  ): void {
    const response = {
      statusCode: code,
      error,
      result,
    }
    if (headers) res.set(headers)
    res.status(code).json(response)
  }
}
