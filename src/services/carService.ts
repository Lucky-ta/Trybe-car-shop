import { ZodError } from 'zod';
import { Car, CarZodSchema } from '../interfaces/CarInterface';
import CarModel from '../models/carModel';

const errorMessage = 'Id must have 24 hexadecimal characters';
const errorObjectNotFound = 'Object not found';

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
        { error: errorMessage },
      status: 400, 
      };
    }
    const car = await this.carModel.getById(id);
    if (!car) {
      return { data: { error: errorObjectNotFound }, status: 404 };
    }
    return { data: car, status: 200 };
  }

  public async update(id: string, car: Car): 
  Promise<ResponseOk | ServiceError> {
    if (id.length < 24) {
      return { data: 
        { error: errorMessage },
      status: 400, 
      };
    }
    const parsed = CarZodSchema.safeParse(car);
    if (!parsed.success) {
      return { data: parsed.error, status: 400 };
    }
    const updatedCar = await this.carModel.update(id, car);
    if (!updatedCar) {
      return { data: { error: errorObjectNotFound }, status: 404 };
    }
    console.log(updatedCar);
    
    return { data: updatedCar, status: 200 };
  }

  public async delete(id: string): Promise<ResponseOk | ServiceError> {
    if (id.length < 24) {
      return { data: 
        { error: errorMessage },
      status: 400, 
      };
    }
    const deletedCar = await this.carModel.delete(id);
    if (!deletedCar) {
      return { data: { error: errorObjectNotFound }, status: 404 };
    }
    return { data: deletedCar, status: 204 };
  }
}

export default CarService;