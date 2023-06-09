import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { StkrepageingDTO } from "../dto/Stkrepageing.dto";
import { Stkrepageing001mb } from "../entity/Stkrepageing001mb";
import { StockAgeingService } from "../service/stock-ageing.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/stkageing')
export class StockAgeingController {
	constructor(private readonly stockAgeingService: StockAgeingService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		console.log("called->pdf");

		return await this.stockAgeingService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {

		return await this.stockAgeingService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() stkrepageingDTO: StkrepageingDTO): Promise<Stkrepageing001mb> {
		return this.stockAgeingService.create(stkrepageingDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() stkrepageingDTO: StkrepageingDTO): Promise<Stkrepageing001mb> {
		return this.stockAgeingService.update(stkrepageingDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Stkrepageing001mb[]> {
		return this.stockAgeingService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Stkrepageing001mb> {
		return this.stockAgeingService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.stockAgeingService.remove(id);
	}
}
