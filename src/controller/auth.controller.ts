import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthService } from '../auth/services/auth.service';


@Controller('/testandreportstudio/api/auth')
export class AuthController {
	constructor(private AuthService: AuthService) { }

	@Get('getUserAuthentication/:username/:password/:domain')
	getUserAuthentication(@Param('username') username: string, @Param('password') password: string, @Param('domain') domain: string): Promise<any> {
		return this.AuthService.getUserAuthentication(username, password);
	}

	@UseGuards(JwtAuthGuard)
	@Get('test')
	async test() {
		return 'Success!';
	}
}
