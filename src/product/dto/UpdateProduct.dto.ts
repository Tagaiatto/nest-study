import { Type } from 'class-transformer';
import { IsString, IsNumber, IsPositive, IsArray, ValidateNested, IsNotEmpty, MaxLength, Min, IsUrl, IsUUID, IsOptional } from 'class-validator';

export class CreateProductDTO {
  @IsUUID(undefined, { message: 'ID de usuário inválido.'})
  userId: string;
  
  @IsUUID(undefined, { message: 'ID de produto inválido.'})
  id: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  price: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(0, { message: 'Invalid minimum quantity'})
  quantityAvailable: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Product description could not be empty'})
  @MaxLength(1000, { message: 'Product description could not have more than 1000 characters'})
  description: string;

  @IsOptional()
  @ValidateNested()
  @IsArray()
  @Type(() => FeatureDTO)
  features: FeatureDTO[];

  @IsOptional()
  @ValidateNested()
  @IsArray()
  @Type(() => ImageDTO)
  images: ImageDTO[];

  @IsOptional()
  @IsString()
  category: string;

  @IsOptional()
  @IsString()
  creationDate: string;

  @IsOptional()
  @IsString()
  updateDate: string;
}

export class FeatureDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
}

export class ImageDTO {
  @IsOptional()
  @IsString()
  @IsUrl()
  url: string;

  @IsOptional()
  @IsString()
  description: string;
}