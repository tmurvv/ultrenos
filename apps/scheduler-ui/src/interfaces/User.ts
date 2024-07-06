import { UserRoles } from '../enums/UserRoles';

export interface User {
    passwordChangedAt: Date;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    roles: UserRoles[];
    id: string;
    color?: string;
}
