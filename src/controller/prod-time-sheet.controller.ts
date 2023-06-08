import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProdtimesheetDTO } from '../dto/Prodtimesheet.dto';
import { Prodtimesheet001mb } from '../entity/Prodtimesheet001mb';
import { ProdTimeSheetService } from '../service/prod-timest.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/prodtimesheet')
export class ProdTimeSheetController {
	constructor(private readonly prodTimeSheetService: ProdTimeSheetService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.prodTimeSheetService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.prodTimeSheetService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() prodtimesheetDTO: ProdtimesheetDTO): Promise<Prodtimesheet001mb> {
		return this.prodTimeSheetService.create(prodtimesheetDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() prodtimesheetDTO: ProdtimesheetDTO): Promise<Prodtimesheet001mb> {
		return this.prodTimeSheetService.update(prodtimesheetDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Prodtimesheet001mb[]> {
		return this.prodTimeSheetService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Prodtimesheet001mb> {
		return this.prodTimeSheetService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.prodTimeSheetService.remove(id);
	}
}
