import { ZodError } from 'zod';
import { Car, CarZodSchema } from '../interfaces/CarInterface';
import CarModel from '../models/carModel';

type MessageError = {
  message?: string;
  error?: string;
};

export interface ServiceError {
  data: ZodError | MessageError;
  status: number;
}
export interface ResponseOk {
  data: Car | Car[] | null;
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

  public async getAll(): Promise<ResponseOk | ServiceError> {
    const data = await this.carModel.getAll();
    if (data.length === 0) {
      return { data, status: 200 };
    }
    return { data, status: 200 };
  }

  public async getById(id: string): Promise<ResponseOk | ServiceError> {
    if (id.length < 24) {
      return { data: 
        { error: 'Id must have 24 hexadecimal characters' },
      status: 400, 
      };
    }
    const car = await this.carModel.getById(id);
    if (!car) {
      return { data: { error: 'Object not found' }, status: 404 };
    }
    return { data: car, status: 200 };
  }
}

export default CarService;