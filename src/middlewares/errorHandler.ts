import { Request, Response, NextFunction } from 'express'
import { ValidationError } from 'express-validation'
import { ApiError } from '../errors'
import { HttpHandler, AppLogger } from '../libs'

function logError(error: ApiError, req: Request, res: Response, next: NextFunction) {
	const logger = new AppLogger()
	logger.error(error)
	next(error)
}

function sendError(err: ApiError, req: Request, res: Response): void {
	let errorMsg = err.message
	const statusCode = err.statusCode || 500
	if (err instanceof ValidationError) {
		Object.keys(err.details[0]).forEach((key) => {
			errorMsg = err.details[0][key].replace(/"/g, '')
		})
	}
	HttpHandler.sendResponse({
		res,
		error: errorMsg,
		code: statusCode,
	})
}

export {
	logError,
	sendError,
}
