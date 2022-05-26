import { z } from 'zod';
import { VehicleZodSchema } from './VehicleInterface';

export const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number({
    required_error: 'DoorsQty is required',
    invalid_type_error: 'DoorsQty must be a number',
  }).gte(2, { message: 'DoorsQty must be at least 2' })
    .lte(4, { message: 'DoorsQty must be at most 4' }),
  seatsQty: z.number({
    required_error: 'SeatsQty is required',
    invalid_type_error: 'SeatsQty must be a number',
  }).gte(2, { message: 'SeatsQty must be at least 2' })
    .lte(7, { message: 'SeatsQty must be at most 7' }),
});

export type Car = z.infer<typeof CarZodSchema>;