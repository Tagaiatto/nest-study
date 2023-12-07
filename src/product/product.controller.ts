import { Body, Controller, Post, Get } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { CreateProductDTO } from "./dto/CreateProduct.dto";
import { v4 as uuid } from 'uuid';
import { ProductEntity } from "./product.entity";

@Controller('/products')
export class ProductController{
    constructor(private productRepository: ProductRepository){}    
    
    @Post()
    async createProduct(@Body() productData: CreateProductDTO) {
        const product = new ProductEntity();
        const { name, price, quantityAvailable, description, features, images, category, creationDate, updateDate } = productData;
        
        product.name = name;
        product.price = price;
        product.quantityAvailable = quantityAvailable; // Assuming there's a property for quantityAvailable
        product.description = description;
        product.features = features;
        product.images = images;
        product.category = category;
        product.creationDate = creationDate;
        product.updateDate = updateDate;
        product.id = uuid();
        await this.productRepository.save(product);
        return {
            message: `Product ${product.name} created successfully!`
        };
    }

    @Get()
    async listUsers() {
        return this.productRepository.list();
    }
}