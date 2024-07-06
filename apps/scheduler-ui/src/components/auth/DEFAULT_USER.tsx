import {UserRoles} from '../../enums/UserRoles';

export const DEFAULT_USER = {
    firstName: "Tisha",
    lastName: "Murvihill",
    password: "password",
    passwordChangedAt: new Date(),
    roles: [UserRoles.PROJECT_MANAGER],
    id: "123",
    email: "tmurv@shaw.ca",
}
