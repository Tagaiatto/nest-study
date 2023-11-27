import { Body, Controller, Post, Get } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/CreateUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from 'uuid';

@Controller('/users')
export class UserController{
    constructor(private userRepository: UserRepository){}    
    
    @Post()
    async createUser(@Body() userData: CreateUserDTO) {
        const userEntity = new UserEntity();
        const { email, password, name } = userData;
        userEntity.email = email;
        userEntity.password = password;
        userEntity.name = name;
        userEntity.id = uuid();
        await this.userRepository.save(userEntity);
        return {
            id: userEntity.id,
            message: `User ${userEntity.name}, created successfully!`
        };        
    }

    @Get()
    async listUsers() {
        return this.userRepository.list();
    }
}