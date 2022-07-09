import { Users } from "./users-dto";

export interface ListUsers {
    next_page: string;
    data: Users;
}