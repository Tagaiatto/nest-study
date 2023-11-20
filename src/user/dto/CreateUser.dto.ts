import { IsEmail, MinLength, IsNotEmpty } from "class-validator";
import { IsUniqueEmail } from "../validation/uniqueEmail.validator";

export class CreateUserDTO {    
    @IsNotEmpty()
    id:string;

    @IsNotEmpty({ message: 'Empty name' })
    name: string;

    @IsEmail(undefined, { message: 'Invalid email format'})
    @IsUniqueEmail({ message: 'Email already exists' })
    email: string;

    @MinLength(6, {message: 'Password must have at least 6 characters'})
    password: string;
}