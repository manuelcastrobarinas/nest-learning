import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';


@Controller('cars')
// @UsePipes(ValidationPipe) al dejar este pipe aqui toda la clase y sus metodos lo van a aplicar
export class CarsController {

  constructor(private readonly  carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id:string) {
    return this.carsService.findOneById(id);
  }

  @Post()
// @UsePipes(ValidationPipe) al dejar este pipe aqui solo el metodo create lo va a aplicar
  createCar(@Body() createCarDto:CreateCarDto) {
    return this.carsService.create(createCarDto);
  }
  
  @Patch(':id')
  updateCar(
    @Param('id', new ParseUUIDPipe) id:string, 
    @Body() updateCarDto:UpdateCarDto
  ) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete()
  deleteCar(@Param('id', ParseUUIDPipe) id:string) {
    return this.carsService.delete(id);
  }
};