import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  if (!req.headers.authorization) {
    return res.status(401).send('token is empty')
  }

  const secretKey: string = process.env.JWT_SECRET_KEY || 'secret'
  const authorization: string = req.headers.authorization.split(' ')[0]
  const token: string = req.headers.authorization.split(' ')[1]

  try {
    if (authorization === 'Bearer') {
      const credential: string | object = jwt.verify(token, secretKey)

      if (credential) {
        req.app.locals.credential = credential
        return next()
      }
    }

    return res.status(401).send({
      message: 'invalid token'
    })
  } catch (error) {
    return res.send(error)
  }
}
