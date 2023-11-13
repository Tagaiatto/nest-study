import { ValidationArguments, ValidatorConstraintInterface, ValidatorConstraint, ValidationOptions, registerDecorator } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class IsEmailUniqueValidator implements ValidatorConstraintInterface {
    constructor(private userRepository: UserRepository) {}

    async validate(value: string, validationArguments?: ValidationArguments): Promise<boolean> {
        const userEmailExists = await this.userRepository.emailAlreadyExists(value);
        return !userEmailExists;
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return 'This email is already in use';
    }

}

export const IsUniqueEmail = (validationOptions: ValidationOptions) => {
    return (obj: Object, prop: string) => {
        registerDecorator({
            target: obj.constructor,
            propertyName: prop,
            options: validationOptions,
            constraints: [],
            validator: IsEmailUniqueValidator
        })
    }
}