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

    async update(id: string, idUser: string, updatedData: Partial<ProductEntity>): Promise<ProductEntity> {

    }
    
}