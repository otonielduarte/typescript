import { UserData } from "../interfaces/user";


export function createUserTS(name: string, email: string, password: string) {
    const newUser = {
        name,
        email,
        password
    }

    return newUser;
}

export function createUserInterface({ name, email, password }: UserData) {
    const newUser = {
        name,
        email,
        password
    }
    return newUser;
}

