import { Car } from './car';

export interface GarageModel {
  cars: Car[],
  count: string | null,
}
