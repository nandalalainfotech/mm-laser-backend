import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProdstockentryDTO } from '../dto/Prodstockentry.dto';
import { Prodstockentry001mb } from '../entity/Prodstockentry001mb';
import { ProdStockService } from '../service/prod-stack.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/prodstock')
export class ProdStockController {
	constructor(private readonly prodStockService: ProdStockService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.prodStockService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.prodStockService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() prodstockentryDTO: ProdstockentryDTO): Promise<Prodstockentry001mb> {
		return this.prodStockService.create(prodstockentryDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() prodstockentryDTO: ProdstockentryDTO): Promise<Prodstockentry001mb> {
		return this.prodStockService.update(prodstockentryDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Prodstockentry001mb[]> {
		return this.prodStockService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Prodstockentry001mb> {
		return this.prodStockService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.prodStockService.remove(id);
	}
}
