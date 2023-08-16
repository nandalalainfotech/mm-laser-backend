import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ApplanguagesettingDTO } from "../dto/Applanguagesetting.dto";
import { Applanguagesetting001mb } from "../entity/Applanguagesetting001mb";
import { ApplanguagesettingService } from "../service/applanguagesetting.service";
import { ApiBearerAuth } from "@nestjs/swagger";
var path = require('path');
const fs = require('fs');

@ApiBearerAuth()
@Controller('/testandreportstudio/api/applanguage')
export class ApplanguagesettingController {
	constructor(private readonly applanguagesettingservice: ApplanguagesettingService) { }

	// @UseGuards(JwtAuthGuard)
    // @Post("save")
    // create(@Body() applicationsettingDTO: ApplanguagesettingDTO): Promise<Applanguagesetting001mb> {
    //     // console.log("appsettingDTO",appsettingDTO);
    //     return this.applanguagesettingservice.create(applicationsettingDTO);
    // }
	@UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() applanguagesettingDTO: ApplanguagesettingDTO): Promise<Applanguagesetting001mb> {
        return this.applanguagesettingservice.create(applanguagesettingDTO);
    }

	// @UseGuards(JwtAuthGuard)
	// @Post("save")
	// create(@Body() accountsreceivableDTO: ApplanguagesettingDTO): Promise<Applanguagesetting001mb[]> {
	// 	return this.applanguagesettingservice.create(accountsreceivableDTO);
	// }


	// @UseGuards(JwtAuthGuard)
	// @Post("save")
	// create(@Body() applanguagesettingDTO: ApplanguagesettingDTO[]): Promise<Applanguagesetting001mb[]> {
	// 	return this.applanguagesettingservice.create(applanguagesettingDTO)
	// }

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() applanguagesettingDTO: ApplanguagesettingDTO): Promise<Applanguagesetting001mb> {
		return this.applanguagesettingservice.update(applanguagesettingDTO)
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Applanguagesetting001mb[]> {
		return this.applanguagesettingservice.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Applanguagesetting001mb> {
		return this.applanguagesettingservice.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.applanguagesettingservice.remove(id);
	}
}