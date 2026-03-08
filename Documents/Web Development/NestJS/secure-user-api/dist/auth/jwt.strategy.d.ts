import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: any): Promise<{
        message: string;
    }>;
    login(dto: any): Promise<{
        access_token: string;
    }>;
}
