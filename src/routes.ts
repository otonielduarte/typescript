import { Request, Response } from 'express';
import { createUserInterface, createUserTS } from './services/CreateUser';

export function helloWorldTs(request: Request, response: Response) {
    return response.json({ message: "Hello world with typescript"});
}

export function user(request: Request, response: Response) {
    const user = createUserTS("otoniel string", "otonielduarte2@gmail.com", "123456");
    return response.json({ user });
}

export function userInterface(request: Request, response: Response) {
    const user = createUserInterface({
        name: "otoniel interface",
        email: "otonielduarte2@gmail.com",
        password: "123456"
    });
    return response.json({ user })
}