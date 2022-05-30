import { ZodError } from 'zod';
import { Car, CarZodSchema } from '../interfaces/CarInterface';
import CarModel from '../models/carModel';

export interface ServiceError {
  data: ZodError;
  status: number;
}
export interface ResponseOk {
  data: Car;
  status: number;
}

class CarService {
  constructor(protected carModel = new CarModel()) { }

  public async create(car: Car): Promise<ResponseOk | ServiceError > {
    const parsed = CarZodSchema.safeParse(car);
    if (!parsed.success) {
      return { data: parsed.error, status: 400 };
    }
    const newCar = await this.carModel.create(car);
    return { data: newCar, status: 201 };
  }
}

export default CarService;