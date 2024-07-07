import {UserRoles} from '../../enums/UserRoles';

export const DEFAULT_USER = {
    firstName: "Demo User",
    lastName: "UltRenos",
    password: "password",
    passwordChangedAt: new Date(),
    roles: [UserRoles.PROJECT_MANAGER],
    id: "123",
    email: "demoUser@example.com",
}
