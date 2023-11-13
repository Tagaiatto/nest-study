import { IsEmail, MinLength, IsNotEmpty } from "class-validator";

export class CreateUserDTO {    
    @IsNotEmpty({ message: 'Empty name' })
    name: string;

    @IsEmail(undefined, { message: 'Invalid email format'})
    email: string;

    @MinLength(6)
    password: string;
}