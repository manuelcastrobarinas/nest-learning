import { IsString } from "class-validator";

export class CreateCarDto {
  
  @IsString({message: `brand is not a string`})
  readonly brand: string;
  
  
  @IsString()
  readonly model: string;

}