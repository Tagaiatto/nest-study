import { Body, Controller, Post, Get, Put, Param } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/CreateUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from 'uuid';
import { ListUserDTO } from "./dto/ListUser.dto";
import { UpdateUserDTO } from "./dto/UpdateUser.dto";

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
            user: new ListUserDTO(userEntity.id, userEntity.name),
            message: `User ${userEntity.name}, created successfully!`
        };        
    }

    @Get()
    async listUsers() {
        const users = await this.userRepository.list();
        const returnUsers = users.map( user => new ListUserDTO(user.id, user.name) );
        return returnUsers;
    }

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() updatedData: UpdateUserDTO){
        const updatedUser = this.userRepository.update(id, updatedData);

        return {
            user: updatedUser,
            message: `User with id ${id}, updated successfully!`
        };
    }
}