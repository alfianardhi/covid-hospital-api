import BaseRouters from './BaseRouters'
import HospitalController from '../controllers/HospitalController'
import { auth } from '../middleware/AuthMiddleware'
import validate from '../middleware/HospitalValidate'

class AskmeRouters extends BaseRouters {
  public routes(): void {
    this.router.get('/', auth, HospitalController.index)
    this.router.post('/', auth, validate, HospitalController.create)
    this.router.get('/:id', auth, HospitalController.show)
    this.router.put('/:id', auth, validate, HospitalController.update)
    this.router.delete('/:id', auth, HospitalController.delete)
  }
}
export default new AskmeRouters().router
