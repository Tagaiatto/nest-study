import { IsString, IsNumber, IsPositive, IsArray } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsPositive()
  quantityAvailable: number;

  @IsString()
  description: string;

  @IsArray()
  features: FeatureDTO[];

  @IsArray()
  images: ImageDTO[];

  @IsString()
  category: string;

  @IsString()
  creationDate: string;

  @IsString()
  updateDate: string;
}

export class FeatureDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;
}

export class ImageDTO {
  @IsString()
  url: string;

  @IsString()
  description: string;
}