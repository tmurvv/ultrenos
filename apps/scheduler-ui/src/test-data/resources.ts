import { UserRoles } from '../enums/UserRoles';
import {User} from '../interfaces/User';

export const resources: User[] = [
    {
        passwordChangedAt: new Date('2023-06-01T14:30:00Z'),
        firstName: 'Olivia',
        lastName: 'Wilson',
        email: 'olivia.wilson@example.com',
        password: 'securePassword789',
        roles: [UserRoles.ADMIN],
        id: '456e7890-b12c-3d45-a678-901234567890'
    },
    {
        passwordChangedAt: new Date('2023-05-20T09:15:00Z'),
        firstName: 'Liam',
        lastName: 'Tremblay',
        email: 'liam.tremblay@example.com',
        password: 'password123abc',
        roles: [UserRoles.RESOURCE],
        id: '789a0bcb-cd12-3456-e789-012345678901'
    },
    {
        passwordChangedAt: new Date('2023-04-25T16:45:00Z'),
        firstName: 'Sophia',
        lastName: 'Yeung',
        email: 'sophia.yeung@example.com',
        password: 'securePassword456',
        roles: [UserRoles.RESOURCE],
        id: 'abc0def1-2345-6789-0abc-def123456789'
    },
    {
        passwordChangedAt: new Date('2023-03-10T11:00:00Z'),
        firstName: 'Abigail',
        lastName: 'Diaz',
        email: 'abigail.diaz@example.com',
        password: 'password456!@#',
        roles: [UserRoles.RESOURCE],
        id: '012f3456-789a-bcde-f012-3456789abcde'
    },
    {
        passwordChangedAt: new Date('2023-02-15T08:30:00Z'),
        firstName: 'Emma',
        lastName: 'Roberts',
        email: 'emma.roberts@example.com',
        password: 'securePassword123',
        roles: [UserRoles.PROJECT_MANAGER],
        id: '123e4567-e89b-12d3-a456-426614174000'
    },
    {
        passwordChangedAt: new Date('2023-01-20T13:45:00Z'),
        firstName: 'Michael',
        lastName: 'Nguyen',
        email: 'michael.nguyen@example.com',
        password: 'password456abc',
        roles: [UserRoles.PROJECT_MANAGER],
        id: '456e7890-b12c-3d45-a678-901234567890'
    },
    {
        passwordChangedAt: new Date('2023-07-01T09:00:00Z'),
        firstName: 'Ethan',
        lastName: 'Nguyen',
        email: 'ethan.nguyen@example.com',
        password: 'securePassword789',
        roles: [UserRoles.PROJECT_MANAGER],
        id: '789a0bcb-cd12-3456-e789-012345678901'
    },
    {
        passwordChangedAt: new Date('2023-06-15T12:30:00Z'),
        firstName: 'Isabella',
        lastName: 'Garcia',
        email: 'isabella.garcia@example.com',
        password: 'password123abc',
        roles: [UserRoles.RESOURCE],
        id: 'abc0def1-2345-6789-0abc-def123456789'
    },
    {
        passwordChangedAt: new Date('2023-05-20T16:00:00Z'),
        firstName: 'Jacob',
        lastName: 'Lee',
        email: 'jacob.lee@example.com',
        password: 'securePassword456',
        roles: [UserRoles.RESOURCE],
        id: '012f3456-789a-bcde-f012-3456789abcde'
    },
    {
        passwordChangedAt: new Date('2023-04-10T10:15:00Z'),
        firstName: 'Mia',
        lastName: 'Chen',
        email: 'mia.chen@example.com',
        password: 'password456!@#',
        roles: [UserRoles.RESOURCE],
        id: '123e4567-e89b-12d3-a456-426614174000'
    },
    {
        passwordChangedAt: new Date('2023-03-25T14:45:00Z'),
        firstName: 'William',
        lastName: 'Hernandez',
        email: 'william.hernandez@example.com',
        password: 'securePassword123',
        roles: [UserRoles.RESOURCE],
        id: '456e7890-b12c-3d45-a678-901234567890'
    },
    {
        passwordChangedAt: new Date('2023-02-05T09:30:00Z'),
        firstName: 'Ava',
        lastName: 'Ramirez',
        email: 'ava.ramirez@example.com',
        password: 'password456abc',
        roles: [UserRoles.RESOURCE],
        id: '789a0bcb-cd12-3456-e789-012345678901'
    },
    {
        passwordChangedAt: new Date('2023-01-12T16:15:00Z'),
        firstName: 'Noah',
        lastName: 'Gonzalez',
        email: 'noah.gonzalez@example.com',
        password: 'securePassword789',
        roles: [UserRoles.RESOURCE],
        id: 'abc0def1-2345-6789-0abc-def123456789'
    },
    {
        passwordChangedAt: new Date('2023-07-10T11:00:00Z'),
        firstName: 'Sophia',
        lastName: 'Martinez',
        email: 'sophia.martinez@example.com',
        password: 'password123!@#',
        roles: [UserRoles.RESOURCE],
        id: '012f3456-789a-bcde-f012-3456789abcde'
    },
    {
        passwordChangedAt: new Date('2023-06-20T14:30:00Z'),
        firstName: 'Liam',
        lastName: 'Rodriguez',
        email: 'liam.rodriguez@example.com',
        password: 'securePassword456',
        roles: [UserRoles.RESOURCE],
        id: '123e4567-e89b-12d3-a456-426614174000'
    },
    {
        passwordChangedAt: new Date('2023-05-05T09:45:00Z'),
        firstName: 'Emily',
        lastName: 'Johnson',
        email: 'emily.johnson@example.com',
        password: 'password456abc',
        roles: [UserRoles.PROJECT_MANAGER],
        id: '456e7890-b12c-3d45-a678-901234567890'
    }
];
