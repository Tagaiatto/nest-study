import { Body, Controller, Post, Get, Put, Param, Delete } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { CreateProductDTO } from "./dto/CreateProduct.dto";
import { ListProductDTO } from "./dto/ListProduct.dto";
import { UpdateProductDTO } from "./dto/UpdateProduct.dto";
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
        product.quantityAvailable = quantityAvailable; 
        product.description = description;
        product.features = features;
        product.images = images;
        product.category = category;
        product.creationDate = creationDate;
        product.updateDate = updateDate;
        product.id = uuid();
        await this.productRepository.save(product);
        return {
            product: new ListProductDTO(product.id, product.name),
            message: `Product ${product.name} created successfully!`
        };
    }

    @Get()
    async listProducts() {
        return this.productRepository.list();
    }

    @Put('/:id')
    async updateProduct(@Param('id') id:string, @Body() productData: UpdateProductDTO){
        const updatedProduct = this.productRepository.update(id, productData);

        return {
            product: updatedProduct,
            message: `Product with id ${id}, updated successfully!`
        }
    }

    @Delete('/:id')
    async removeProduct(@Param('id') id: string){
        const removedProduct = await this.productRepository.remove(id);

        return {
            product: removedProduct,
            message: `Product with id ${id}, removed successfully!`
        }
    }
}