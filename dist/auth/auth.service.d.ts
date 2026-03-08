import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: any): Promise<{
        message: string;
    }>;
    login(dto: any): Promise<{
        access_token: string;
    }>;
}
