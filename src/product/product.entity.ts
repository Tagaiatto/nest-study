export class ProductEntity {
    id: string;
    userId: string;
    name: string;
    price: number;
    quantityAvailable: number;
    description: string;
    features: FeatureEntity[];
    images: ImageEntity[];
    category: string;
    creationDate: string;
    updateDate: string;
}
  
export class FeatureEntity {
    name: string;
    description: string;
}
  
export class ImageEntity {
    url: string;
    description: string;
}