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
    
}