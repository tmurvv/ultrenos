import { UserRoles } from '../enums/userRoles';

export interface User {
    passwordChangedAt: Date;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    roles: UserRoles[];
    id: string;
}
