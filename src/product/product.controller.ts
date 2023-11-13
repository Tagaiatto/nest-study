import { Body, Controller, Post, Get } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { CreateProductDTO } from "./dto/CreateProduct.dto";

@Controller('/products')
export class ProductController{
    constructor(private productRepository: ProductRepository){}    
    
    @Post()
    async createUser(@Body() productData: CreateProductDTO) {
        const id = await this.productRepository.save(productData);
        return `ID = ${id}`;
    }

    @Get()
    async listUsers() {
        return this.productRepository.list();
    }
}