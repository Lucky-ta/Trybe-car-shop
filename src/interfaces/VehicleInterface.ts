import { z } from 'zod';

export const VehicleZodSchema = z.object({
  model: z.string({
    required_error: 'Model is required',
    invalid_type_error: 'Model must be a string',
  }).min(3, { message: 'Model must be at least 3 characters' }),
  year: z.number({
    required_error: 'Year is required',
    invalid_type_error: 'Year must be a number',
  }).gte(1900, { message: 'Year must be at least 1900' })
    .lte(2022, { message: 'Year must be at most 2022' }),
  color: z.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  }).min(3, { message: 'Color must be at least 3 characters' }),
  status: z.boolean().optional(),
  buyValue: z.number({
    required_error: 'BuyValue is required',
    invalid_type_error: 'BuyValue must be a number',
  }).int({ message: 'BuyValue must be an integer' }),
});

export type Vehicle = z.infer<typeof VehicleZodSchema>;