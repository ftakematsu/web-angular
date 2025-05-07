import { Address } from "./address.model";

export class User {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    phone?: string;
    address?: Address;
}