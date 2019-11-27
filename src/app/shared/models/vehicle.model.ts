export default class Vehicle {
  licencePlate: string;
  vehicleType: vehicleTypes | '';
  brand: string;
  model: string;
  year: string;
}

export enum vehicleTypes {
  CAR = 'carro',
  MOTORCYCLE = 'moto',
}
