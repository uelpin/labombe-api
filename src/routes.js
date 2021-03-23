import { Router } from 'express';
import scrapingController from './app/controllers/scrapingController'
const routes = new Router();

routes.get('/', scrapingController.login)

export default routes;