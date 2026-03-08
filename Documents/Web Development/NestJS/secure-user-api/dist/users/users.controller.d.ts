import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(body: any): import(".prisma/client").Prisma.Prisma__UserClient<{
        name: string;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        id: number;
    }>;
    update(id: string, body: any): import(".prisma/client").Prisma.Prisma__UserClient<{
        name: string;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        name: string;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
