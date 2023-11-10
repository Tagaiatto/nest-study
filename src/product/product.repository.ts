import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductRepository {
    private products = [];

    async save(product): Promise<number> {
        this.products.push(product);
        return this.products.length - 1;
    }

    async list() {
        return this.products;
    }
    
}