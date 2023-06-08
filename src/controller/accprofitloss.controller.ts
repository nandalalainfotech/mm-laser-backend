import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { AccprofitlossstatementDTO } from "../dto/Accprofitlossstatement.dto";
import { Accprofitlossstatement001mb } from "../entity/Accprofitlossstatement001mb";
import { AccProfitLossService } from "../service/accprofitloss.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/profitloss')
export class AccProfitLossController {
	constructor(private readonly accprofitlossservice: AccProfitLossService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.accprofitlossservice.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.accprofitlossservice.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() acccashflowDTO: AccprofitlossstatementDTO): Promise<Accprofitlossstatement001mb> {
		return this.accprofitlossservice.create(acccashflowDTO)
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() acccashflowDTO: AccprofitlossstatementDTO): Promise<Accprofitlossstatement001mb> {
		return this.accprofitlossservice.update(acccashflowDTO)
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Accprofitlossstatement001mb[]> {
		return this.accprofitlossservice.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Accprofitlossstatement001mb> {
		return this.accprofitlossservice.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.accprofitlossservice.remove(id);
	}
}