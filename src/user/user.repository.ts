import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository {
    private users: UserEntity[] = [];

    async save(user: UserEntity): Promise<void> {
        this.users.push(user);             
    }

    async list(): Promise<UserEntity[]> {
        return this.users;
    }

    async update(id: string, updatedData: Partial<UserEntity>): Promise<UserEntity> {
        const user = this.users.find( registeredUser => registeredUser.id === id );
        if(!user) {
            throw new Error('User not found');
        }

        Object.entries(updatedData).forEach(([key, value]) => {
            if(key === 'id'){
                return;
            }
            user[key] = value;
        });

        return user;
    }

    async emailAlreadyExists(email: string): Promise<boolean> {
        const emailExists = this.users.some(user => user.email === email);
        return emailExists;
    }
    
}