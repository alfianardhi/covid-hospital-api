import { Request, Response } from 'express'
import IController from './ControllerInterface'

import HospitalService from '../services/HospitalListService'

const db = require('../db/models')

require('dotenv').config()

class HospitalController implements IController {
  index = async (req: Request, res: Response): Promise<Response> => {
    return res
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    return res
  }

  show = (req: Request, res: Response): Response => {
    return res.send('')
  }

  update = (req: Request, res: Response): Response => {
    return res.send('')
  }

  delete = (req: Request, res: Response): Response => {
    return res.send('')
  }
}
export default new HospitalController()
