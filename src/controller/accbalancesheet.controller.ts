import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { AccbalancesheetDTO } from "../dto/Accbalancesheet.dto";
import { Accbalancesheet001mb } from "../entity/Accbalancesheet001mb";
import { AccBalanceSheetservice } from "../service/accbalancesheet.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/balancesheet')
export class AccBalanceSheetcontroller {
	constructor(private readonly accbalancesheetservice: AccBalanceSheetservice) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.accbalancesheetservice.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.accbalancesheetservice.downloadExcel(request, response);
	}


	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() accbalancesheetDTO: AccbalancesheetDTO): Promise<Accbalancesheet001mb> {
		return this.accbalancesheetservice.create(accbalancesheetDTO)
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() accbalancesheetDTO: AccbalancesheetDTO): Promise<Accbalancesheet001mb> {
		return this.accbalancesheetservice.create(accbalancesheetDTO)
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Accbalancesheet001mb[]> {
		return this.accbalancesheetservice.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Accbalancesheet001mb> {
		return this.accbalancesheetservice.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.accbalancesheetservice.remove(id);
	}
}