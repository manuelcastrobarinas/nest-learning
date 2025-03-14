import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';


@Injectable()
export class CarsService {
  
  private cars: Car[] = [
    {
      id  :   uuid(),
      brand: 'Toyota',
      model: 'Corolla'
    },
    {
      id    : uuid(),
      brand : 'Honda',
      model : 'Civic'
    },
    {
      id    : uuid(),
      brand : 'Jeep',
      model : 'Cherokee'
    },
  ]

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car =  this.cars.find(car => car.id === id); 
    if (!car) throw new NotFoundException(`car with id '${id} not found`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar:Car = {
      id    : uuid(),
      ...createCarDto
    }

    this.cars.push(newCar);
    console.log(this.cars);
    return newCar;
  }

  update(id: string, updateCarDto:UpdateCarDto) {
    let carDB: Car = this.findOneById(id);
    if (updateCarDto.id && updateCarDto.id !== id) throw new BadRequestException(`Car id is not valid inside body`);
    
    this.cars = this.cars.map(car => {
      if (car.id === id) {
        carDB = {
          ...carDB, //manda las propiedades originales del carro
          ...updateCarDto, //remplaza las propiedades que el usuario desea modificar
          id //mandamos el id original
        }
        return carDB;
      }
      return car;
    })
    return carDB;
  }

  delete(id: string) {
    const findCar = this.findOneById(id);
    if (!findCar) throw new BadRequestException(`car isn't exist`);
    this.cars = this.cars.filter(car => car.id !== id);
    return;
  }  


}
