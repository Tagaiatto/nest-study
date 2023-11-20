import { Type } from 'class-transformer';
import { IsString, IsNumber, IsPositive, IsArray, ValidateNested, IsNotEmpty, MaxLength, Min, IsUrl, IsUUID } from 'class-validator';

export class CreateProductDTO {
  @IsUUID(undefined, { message: 'ID de usuário inválido.'})
  userId: string;
  
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsPositive()
  @Min(0, { message: 'Invalid minimum quantity'})
  quantityAvailable: number;

  @IsString()
  @IsNotEmpty({ message: 'Product description could not be empty'})
  @MaxLength(1000, { message: 'Product description could not have more than 1000 characters'})
  description: string;

  @ValidateNested()
  @IsArray()
  @Type(() => FeatureDTO)
  features: FeatureDTO[];

  @ValidateNested()
  @IsArray()
  @Type(() => ImageDTO)
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
  @IsUrl()
  url: string;

  @IsString()
  description: string;
}