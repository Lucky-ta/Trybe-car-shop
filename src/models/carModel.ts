import { model as createModel } from 'mongoose';
import carSchema from '../schemas/carSchema';
import { Car } from '../interfaces/CarInterface';

class CarModel {
  constructor(protected model = createModel<Car>('Cars', carSchema)) {}

  public async create(car: Car): Promise<Car> {
    const newCar = await this.model.create(car);
    return newCar;
  }

  public async getAll(): Promise<Car[]> {
    const cars = await this.model.find();
    return cars;
  }

  public async getById(id: string): Promise<Car | null> {
    const car = await this.model.findById(id);
    return car;
  }

  public async update(id: string, car: Car): Promise<Car | null> {
    const updatedCar = await this.model.findByIdAndUpdate(id, car);
    return updatedCar;
  }
}

export default CarModel;