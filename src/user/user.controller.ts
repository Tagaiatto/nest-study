import { Body, Controller, Post, Get } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/CreateUser.dto";

@Controller('/users')
export class UserController{
    constructor(private userRepository: UserRepository){}    
    
    @Post()
    async createUser(@Body() userData: CreateUserDTO) {
        const id = await this.userRepository.save(userData);
        return `ID = ${id}`;        
    }

    @Get()
    async listUsers() {
        return this.userRepository.list();
    }
}