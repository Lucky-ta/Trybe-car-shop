import { model as createModel } from 'mongoose';
import carSchema from '../schemas/carSchema';
import { Car } from '../interfaces/CarInterface';

class CarModel {
  constructor(protected model = createModel<Car>('Cars', carSchema)) {}

  public async create(car: Car): Promise<Car> {
    const newCar = await this.model.create(car);
    return newCar;
  }
}

export default CarModel;