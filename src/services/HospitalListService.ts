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
    let { hospital_name, hospital_address, municipalities, district, sub_district } = this.body

    const hospitals = await db.hospitals.create({
      hospital_name: hospital_name,
      hospital_address: hospital_address,
      municipalities: municipalities,
      district: district,
      sub_district: sub_district
    })

    return hospitals
  }

  getOne = async () => {
    const { id } = this.params

    const hospitals = await db.hospitals.findAll({
      where: {
        id: id
      }
    })

    return hospitals
  }

  update = async () => {
    let { hospital_name, hospital_address, municipalities, district, sub_district } = this.body
    let { id } = this.params

    const hospitals = await db.hospitals.update(
      {
        hospital_name: hospital_name,
        hospital_address: hospital_address,
        municipalities: municipalities,
        district: district,
        sub_district: sub_district
      },
      {
        where: {
          id: id
        }
      }
    )

    return hospitals
  }

  delete = async () => {
    let { id } = this.params

    const hospitals = await db.hospitals.destroy({
      where: {
        id: id
      }
    })

    return hospitals
  }
}
export default HospitalListService
