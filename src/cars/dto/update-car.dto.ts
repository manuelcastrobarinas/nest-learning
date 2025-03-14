import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {
  
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString({message: `brand is not a string`})
  @IsOptional()
  readonly brand?: string;
  
  @IsString()
  @IsOptional()
  readonly model?: string;

}