import { Injectable } from "@nestjs/common";
import { ProductEntity } from "./product.entity";
import { promises } from "dns";

@Injectable()
export class ProductRepository {
    private products: ProductEntity[] = [];

    async save(product: ProductEntity): Promise<number> {
        this.products.push(product);
        return this.products.length - 1;
    }

    async list(): Promise<ProductEntity[]> {
        return this.products;
    }
    
}