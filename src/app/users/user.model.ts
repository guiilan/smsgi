export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface ListUsers {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}

export interface Create {
    name: string;
    job: string;
}

export interface ResCreate {
    name: string;
    job: string;
    id: string;
    createdAt: Date;
}

export interface ListUser {
    data: User
}

export interface Update {
    name: string;
    job: string;
}

export interface ResUpdate {
    name: string;
    job: string;
    updateAt: Date;
}

