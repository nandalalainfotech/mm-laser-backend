import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GrossprofitDTO } from '../dto/Grossprofit.dto';
import { Grossprofit001mb } from '../entity/Grossprofit001mb';
import { GrossProfitService } from '../service/gross-profit.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/grossprofit')
export class GrossProfitController {
	constructor(private readonly grossProfitService: GrossProfitService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.grossProfitService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.grossProfitService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() grossprofitDTO: GrossprofitDTO): Promise<Grossprofit001mb> {
		return this.grossProfitService.create(grossprofitDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() grossprofitDTO: GrossprofitDTO): Promise<Grossprofit001mb> {
		return this.grossProfitService.update(grossprofitDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Grossprofit001mb[]> {
		return this.grossProfitService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Grossprofit001mb> {
		return this.grossProfitService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.grossProfitService.remove(id);
	}
}
