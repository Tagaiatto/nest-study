import { Injectable } from "@nestjs/common";
import { ProductEntity } from "./product.entity";
import { promises } from "dns";

@Injectable()
export class ProductRepository {
    private products: ProductEntity[] = [];

    async save(product: ProductEntity): Promise<void> {
        this.products.push(product);        
    }

    async list(): Promise<ProductEntity[]> {
        return this.products;
    }

    async update(id: string, updatedData: Partial<ProductEntity>): Promise<ProductEntity> {
        const product = this.findById(id);
        Object.entries(updatedData).forEach(([key, value]) => {
            if(['id', 'userId'].includes(key)){
                return;
            }
            product[key] = value;
        })
        return product;
    }

    private findById(id: string): ProductEntity{
        const product = this.products.find( registeredProduct => registeredProduct.id === id );
        if(!product) {
            throw new Error('Product not found');
        }
        return product;
    }
    
}