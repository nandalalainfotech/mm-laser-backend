import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { UpdatebankDTO } from "../dto/Updatebank.dto";
import { Updatebank001mb } from "../entity/Updatebank001mb";
import { updateBankService } from "../service/updatebank.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/updatebank')
export class updateBankController {
	constructor(private readonly updatebankservice: updateBankService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.updatebankservice.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.updatebankservice.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() updatebankDTO: UpdatebankDTO): Promise<Updatebank001mb> {
		return this.updatebankservice.create(updatebankDTO)
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() updatebankDTO: UpdatebankDTO): Promise<Updatebank001mb> {
		return this.updatebankservice.create(updatebankDTO)
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Updatebank001mb[]> {
		return this.updatebankservice.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Updatebank001mb> {
		return this.updatebankservice.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.updatebankservice.remove(id);
	}
}