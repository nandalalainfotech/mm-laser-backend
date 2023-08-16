
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { UserDTO } from "../dto/User.dto";
import { User001mb } from "../entity/User001mb";
import { UserService } from "../service/user.service";

@ApiBearerAuth()
@Controller('/testandreportstudio/api/user')
export class UserController {
	constructor(private readonly userService: UserService) { }


	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() userDTO: UserDTO): Promise<User001mb> {
		return this.userService.create(userDTO)
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() userDTO: UserDTO): Promise<User001mb> {
		return this.userService.create(userDTO)
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<User001mb[]> {
		return this.userService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<User001mb> {
		return this.userService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.userService.remove(id);
	}

	@UseGuards(JwtAuthGuard)
	@Post("updateUserTheme")
	updateUserTheme(@Body() updateTheme: any): Promise<User001mb> {
		return this.userService.update1(updateTheme);
	}

	@UseGuards(JwtAuthGuard)
	@Post("updateUserLanguage")
	updateUserLanguagee(@Body() updateLanguage: any): Promise<User001mb> {
		return this.userService.update1(updateLanguage);
	}

	@UseGuards(JwtAuthGuard)
	@Post('updateUserName')
	updateUserName(@Body() userName: any): Promise<User001mb> {
		return this.userService.updateUserName(userName);
	}

	// @UseGuards(JwtAuthGuard)
	@Post('updatePassword')
	updatePassword(@Body() userDTO: UserDTO): Promise<User001mb> {
		return this.userService.updatePassword(userDTO);
	}

}