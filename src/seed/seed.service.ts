import { Injectable } from '@nestjs/common';
import { BRAND_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  
  constructor(
    private readonly carsService  : CarsService,
    private readonly brandService : BrandsService
  ) {}
  populateDB() {

    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandService.fillBrandsWithSeedData(BRAND_SEED);
    return 'seed ejecuted';
  }

}
