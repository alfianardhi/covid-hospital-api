import { NextFunction, Request, Response } from 'express'
import { check, validationResult } from 'express-validator'

const validate = [
  check('hospital_name').isString(),
  check('hospital_address').isString(),
  check('municipalities').isString(),
  check('district').isString(),
  check('sub_district').isString(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(422).send({ errors: errors.array() })
    }
    return next()
  }
]
export default validate
