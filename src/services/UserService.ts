import { Injectable } from "@tsed/di";

@Injectable()
export class UserService {
    async getAllUsers(): Promise<Array<User>> {
        return [
            {
                id: 1,
                name: 'John Doe',
                email: 'john@example.com',
                age: 25,
            },
            {
                id: 2,
                name: 'Jane Doe',
                email: 'jane@example.com',
                age: 30,
            },
            {
                id: 3,
                name: 'Bob Smith',
                email: 'bob@example.com',
                age: 28,
            },
        ]
    }


}