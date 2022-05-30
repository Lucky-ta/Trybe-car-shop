import { Schema } from 'mongoose';
import { Car } from '../interfaces/CarInterface';

const carSchema = new Schema<Car>({
  doorsQty: { type: Number, required: true },
  seatsQty: { type: Number, required: true },
  buyValue: { type: Number, required: true },
  color: { type: String, required: true },
  model: { type: String, required: true },
  status: { type: Boolean, required: false },
  year: { type: Number, required: true },
}, { versionKey: false });

export default carSchema;