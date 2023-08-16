import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthService } from '../auth/services/auth.service';
import { ApiBearerAuth } from '@nestjs/swagger';


@ApiBearerAuth()
@Controller('/testandreportstudio/api/auth')
export class AuthController {
	constructor(private AuthService: AuthService) { }

	@Get('getUserAuthentication/:username/:password/')
	getUserAuthentication(@Param('username') username: string, @Param('password') password: string): Promise<any> {

console.log("username,password--> ", username,password);

		return this.AuthService.getUserAuthentication(username, password);
	}

	@UseGuards(JwtAuthGuard)
	@Get('test')
	async test() {
		return 'Success!';
	}
}
