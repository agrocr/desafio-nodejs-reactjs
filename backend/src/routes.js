import { Router } from 'express'
import PersonController from './controller/PersonController'

const routes = new Router()

routes.get('/people', PersonController.index)
routes.post('/people', PersonController.store)
routes.delete('/people/:id', PersonController.delete)
routes.put('/people/:id', PersonController.update)

export default routes
