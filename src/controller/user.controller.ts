// import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
// import { JwtAuthGuard } from "../auth/jwt-auth.guard";
// import { UserDTO } from "../dto/User.dto";
// import { User001mb } from "../entity/User001mb";
// import { UserService } from "../service/user.service";

// @Controller('/testandreportstudio/api/user')
// export class UserController {
// 	constructor(private readonly userService: UserService) { }

// 	// --------------------------user registration-------------


// 	@Post("regSave")
// 	create1(@Body() userDTO: UserDTO): Promise<User001mb> {
// 		console.log("user save---->");
// 		return this.userService.create(userDTO);
// 	}
// 	// @Get('registerfindAll')
// 	// registerfindAll(): Promise<User001mb[]> {
// 	//     return this.userService.findAll();
// 	// }

// 	// --------------------------user registration end-------------

// 	@UseGuards(JwtAuthGuard)
// 	@Post("save")
// 	create(@Body() userDTO: UserDTO): Promise<User001mb> {
// 		return this.userService.create(userDTO);
// 	}

// 	@UseGuards(JwtAuthGuard)
// 	@Put("update")
// 	update(@Body() userDTO: UserDTO): Promise<User001mb> {
// 		return this.userService.update(userDTO);
// 	}

// @UseGuards(JwtAuthGuard)
// @Post("updateUserTheme")
// updateUserTheme(@Body() updateTheme: any): Promise<User001mb> {
// 	return this.userService.update1(updateTheme);
// }

// @UseGuards(JwtAuthGuard)
// @Post('updateUserName')
// updateUserName(@Body() userName: any): Promise<User001mb> {
// 	return this.userService.updateUserName(userName);
// }

// @UseGuards(JwtAuthGuard)
// @Post('updatePassword')
// updatePassword(@Body() userDTO: UserDTO): Promise<User001mb> {
// 	return this.userService.updatePassword(userDTO);
// }

// 	@UseGuards(JwtAuthGuard)
// 	@Get('findAll')
// 	findAll(): Promise<User001mb[]> {
// 		return this.userService.findAll();
// 	}

// 	@UseGuards(JwtAuthGuard)
// 	@Get(':id')
// 	findOne(@Param('id') id: number): Promise<User001mb> {
// 		return this.userService.findOne(id);
// 	}

// 	@UseGuards(JwtAuthGuard)
// 	@Delete('delete/:id')
// 	remove(@Param('id') id: number): Promise<void> {
// 		return this.userService.remove(id);
// 	}
// }

import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { createReadStream } from "fs";
import path from "path";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { UserDTO } from "../dto/User.dto";
import { User001mb } from "../entity/User001mb";
import { UserService } from "../service/user.service";
import { Response } from "express";
import { Request } from "supertest";


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
		console.log("User001mb-->", User001mb);
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

	@UseGuards(JwtAuthGuard)
	@Post('updatePassword')
	updatePassword(@Body() userDTO: UserDTO): Promise<User001mb> {
		return this.userService.updatePassword(userDTO);
	}

	// @Get('pdf')
	// @Header('Content-Type', 'application/pdf')
	// async downloadPdf(@Req() request: Request, @Res() response: Response) {
	// 	return await this.userservice.downloadPdf(request, response);
	// }

	// @Get('excel')
	// @Header("Content-Type",
	// 	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	// @Header("Content-Disposition",
	// 	"attachment; filename=" + "Attendace Report" + ".xlsx")
	// async downloadExcel(@Req() request: Request, @Res() response: Response) {
	// 	return await this.userservice.downloadExcel(request, response);
	// }

}