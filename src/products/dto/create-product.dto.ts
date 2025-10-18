/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  ValidateNested,
} from 'class-validator';

class createProductDetailsDto {
  @IsNotEmpty({ message: "Color can't be empty" })
  @IsString({ message: 'Color must be a string' })
  color: string;

  @IsNotEmpty({ message: "Size can't be empty" })
  @IsInt({ message: 'Size must be an integer' })
  size: number;
}

export class CreateProductDto {
  @IsNotEmpty({ message: "Name can't be empty" })
  name: string;

  @IsNotEmpty({ message: "Price can't be empty" })
  price: number;

  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => createProductDetailsDto)
  details: createProductDetailsDto;
}
