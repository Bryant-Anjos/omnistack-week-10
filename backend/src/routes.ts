import { Router } from 'express'

const routes: Router = Router()

import DevController from './controllers/DevController'
import SearchController from './controllers/SearchController'

routes.get('/devs/:id', DevController.show)
routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.put('/devs/:id', DevController.update)
routes.delete('/devs/:id', DevController.destroy)

routes.get('/search', SearchController.index)

export default routes
