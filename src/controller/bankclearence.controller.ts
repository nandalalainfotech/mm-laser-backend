import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { BankclearanceDTO } from "../dto/Bankclearance.dto";
import { Bankclearance001mb } from "../entity/Bankclearance001mb";
import { BankClearenceService } from "../service/bankclearence.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/bankclearance')
export class BankClearenceController {
	constructor(private readonly bankclearenceservice: BankClearenceService) { }


	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.bankclearenceservice.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.bankclearenceservice.downloadExcel(request, response);
	}


	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() bankclearanceDTO: BankclearanceDTO): Promise<Bankclearance001mb> {
		return this.bankclearenceservice.create(bankclearanceDTO)
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() bankclearanceDTO: Bankclearance001mb): Promise<Bankclearance001mb> {
		return this.bankclearenceservice.create(bankclearanceDTO)
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Bankclearance001mb[]> {
		return this.bankclearenceservice.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Bankclearance001mb> {
		return this.bankclearenceservice.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.bankclearenceservice.remove(id);
	}
}