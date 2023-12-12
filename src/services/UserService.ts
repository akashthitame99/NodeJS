import { Injectable } from "@tsed/di";
import { Auth } from "src/viewModels.ts/AuthViewModel";

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

    async signIn(signInData: Auth): Promise<User | undefined> {
        console.log('signInData', signInData)

        try {
            if (signInData.username) {
                return {
                    id: 1,
                    name: 'John Doe',
                    email: 'john@example.com',
                    age: 25,
                }
            }
        } catch (error: any) {

            throw (error)
        }

    }


}