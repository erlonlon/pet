import {Router, Request, Response} from 'express'
import * as PageController from '../controllers/pageControlller'
import * as SearchController from '../controllers/searchController'

const router = Router()

router.get('/', PageController.home)
router.get('/cats', PageController.cats)
router.get('/dogs', PageController.dogs)
router.get('/fishes', PageController.fishes)
router.get('/search', SearchController.search)

export default router