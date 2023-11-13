import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
    private users = [];

    async save(user): Promise<number> {
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