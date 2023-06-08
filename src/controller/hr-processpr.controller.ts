import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProcessprDTO } from '../dto/Processpr.dto';
import { Processpr001mb } from '../entity/Processpr001mb';
import { HrProcessPrService } from '../service/hr-processpr.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/process')
export class HrProcessPrController {
	constructor(private readonly processprService: HrProcessPrService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.processprService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.processprService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() processprDTO: ProcessprDTO): Promise<Processpr001mb> {
		return this.processprService.create(processprDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() processprDTO: ProcessprDTO): Promise<Processpr001mb> {
		return this.processprService.update(processprDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Processpr001mb[]> {
		return this.processprService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Processpr001mb> {
		return this.processprService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.processprService.remove(id);
	}
}
