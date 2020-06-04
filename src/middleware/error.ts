import { Request, Response, NextFunction } from 'express'

class HttpException extends Error {
  statusCode: number
  message: string
  error: string | null

  constructor(statusCode: number, message: string, error?: string) {
    super(message)

    this.statusCode = statusCode
    this.message = message
    this.error = error || null
  }
}

export const errorHandler = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = error.statusCode || 500
  const message = error.message || 'Server error'

  response.status(status).send(message)
}

export const notFoundHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {

  const message = 'Not found'

  response.status(404).send(message)
}
