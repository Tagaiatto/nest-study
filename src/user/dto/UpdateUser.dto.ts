import { IsEmail, MinLength, IsNotEmpty, IsOptional } from "class-validator";
import { IsUniqueEmail } from "../validation/uniqueEmail.validator";

export class UpdateUserDTO {        
    id:string;

    @IsNotEmpty({ message: 'Empty name' })
    @IsOptional()
    name: string;

    @IsEmail(undefined, { message: 'Invalid email format'})
    @IsUniqueEmail({ message: 'Email already exists' })
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'Password must have at least 6 characters'})
    @IsOptional()
    password: string;
}