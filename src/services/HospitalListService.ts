import { Request } from 'express'
const db = require('../db/models')

class HospitalListService {
  body: Request['body']
  params: Request['params']

  constructor(req: Request) {
    this.body = req.body
    this.params = req.params
  }

  getAll = async () => {
    const hospitals = await db.hospitals.findAll({
      attributes: ['id', 'hospital_name', 'hospital_address', 'municipalities', 'district', 'sub_district']
    })

    return hospitals
  }

  store = async () => {
    const { description } = this.body

    return ''
  }

  getOne = async () => {
    const { id } = this.params

    return ''
  }

  update = async () => {
    const { id } = this.params
    const { description } = this.body

    return ''
  }

  delete = async () => {
    const { id } = this.params

    return ''
  }
}
export default HospitalListService
