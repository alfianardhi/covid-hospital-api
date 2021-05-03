import { Request, Response } from 'express'
import IController from './ControllerInterface'

import HospitalService from '../services/HospitalListService'

const db = require('../db/models')

require('dotenv').config()

class HospitalController implements IController {
  index = async (req: Request, res: Response): Promise<Response> => {
    try {
      const service: HospitalService = new HospitalService(req)

      const hospitals = await service.getAll()

      res.status(200).send({
        data: hospitals,
        message: 'get hospital datas success'
      })
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Something wrong. Try again later'
      })
    }

    return res
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const service: HospitalService = new HospitalService(req)

      const hospitals = await service.store()

      res.status(200).send({
        data: hospitals,
        message: 'create hospital datas success'
      })
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Something wrong to create data. Try again later'
      })
    }

    return res
  }

  show = async (req: Request, res: Response): Promise<Response> => {
    try {
      const service: HospitalService = new HospitalService(req)

      const hospitals = await service.getOne()

      res.status(200).send({
        data: hospitals,
        message: 'show hospital datas success'
      })
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Something wrong to show data. Try again later'
      })
    }

    return res
  }

  update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const service: HospitalService = new HospitalService(req)

      const hospitals = await service.update()

      res.status(200).send({
        data: hospitals,
        message: 'update hospital datas success'
      })
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Something wrong to update data. Try again later'
      })
    }

    return res
  }

  delete = (req: Request, res: Response): Response => {
    return res.send('')
  }
}
export default new HospitalController()
