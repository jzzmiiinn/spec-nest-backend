import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): import(".prisma/client").Prisma.Prisma__UserClient<{
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
    findOne(id: number): Promise<{
        name: string;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        id: number;
    }>;
    update(id: number, data: any): import(".prisma/client").Prisma.Prisma__UserClient<{
        name: string;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        name: string;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
