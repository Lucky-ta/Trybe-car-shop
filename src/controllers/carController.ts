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
}

export default CarController;