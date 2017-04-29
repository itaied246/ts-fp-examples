export interface User {
    id: number;
    name: string;
    address?: address;
}

interface address {
    street: street;
}

interface street {
    number: number;
    name: string;
}