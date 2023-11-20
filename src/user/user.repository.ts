import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository {
    private users: UserEntity[] = [];

    async save(user: UserEntity): Promise<number> {
        this.users.push(user);
        return this.users.length - 1;        
    }

    async list() {
        return this.users;
    }

    async emailAlreadyExists(email: string): Promise<boolean> {
        const emailExists = this.users.some(user => user.email === email);
        return emailExists;
    }
    
}