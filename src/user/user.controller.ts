import { Body, Controller, Post, Get } from "@nestjs/common";
import { UserRepository } from "./user.repository";

@Controller('/users')
export class UserController{
    constructor(private userRepository: UserRepository){}    
    
    @Post()
    async createUser(@Body() userData) {
        const id = await this.userRepository.save(userData);
        return `ID = ${id}`;        
    }

    @Get()
    async listUsers() {
        return this.userRepository.list();
    }
}