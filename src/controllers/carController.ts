import { Request, Response } from 'express';
import CarService from '../services/carService';

class CarController {
  constructor(protected carService = new CarService()) {}

  public create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { body } = req;
      const newCar = await this.carService.create(body);
      return res.status(newCar.status).json(newCar.data);
    } catch (e: any) {
      return res.status(500).json({ message: e.message });
    }
  };

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const cars = await this.carService.getAll();
      return res.status(cars.status).json(cars.data);
    } catch (e: any) {
      return res.status(500).json({ message: e.message });
    }
  };

  public getById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const car = await this.carService.getById(id);
      return res.status(car.status).json(car.data);
    } catch (e: any) {
      return res.status(500).json({ message: e.message });
    }
  };

  public update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const { body } = req;
      const car = await this.carService.update(id, body);
      return res.status(car.status).json(car.data);
    } catch (e: any) {
      return res.status(500).json({ message: e.message });
    }
  };
}

export default CarController;