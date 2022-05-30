import { Router } from 'express';
import CarController from '../controllers/carController';

const carRouter = Router();

const carControllers = new CarController();

carRouter.post('/', carControllers.create);

export default carRouter;