import { Router } from 'express';
import CarController from '../controllers/carController';

const carRouter = Router();

const carControllers = new CarController();

carRouter.post('/', carControllers.create);
carRouter.get('/', carControllers.getAll);
carRouter.get('/:id', carControllers.getById);
carRouter.put('/:id', carControllers.update);

export default carRouter;