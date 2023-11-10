import { Body, Controller, Post, Get } from "@nestjs/common";
import { ProductRepository } from "./product.repository";

@Controller('/users')
export class UserController{
    constructor(private productRepository: ProductRepository){}    
    
    @Post()
    async createUser(@Body() productData) {
        const id = this.productRepository.save(productData);
        return `ID = ${id}`;
    }

    @Get()
    async listUsers() {
        return this.productRepository.list();
    }
}