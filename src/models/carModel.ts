import { model as createModel } from 'mongoose';
import carSchema from '../schemas/carSchema';
import { Car } from '../interfaces/CarInterface';

class CarModel {
  constructor(private model = createModel('Cars', carSchema)) {
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

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

  public async delete(id: string): Promise<Car | null> {
    const deletedCar = await this.model.findByIdAndDelete(id);
    return deletedCar;
  }
}

export default CarModel;