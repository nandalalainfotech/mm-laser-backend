import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProgprodorderDTO } from '../dto/Progprodorder.dto';
import { Progprodorder001mb } from '../entity/Progprodorder001mb';
import { ProgProdOrderService } from '../service/prog-prod-order.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/progprodorder')
export class ProgProdOrderController {
	constructor(private readonly progProdOrderService: ProgProdOrderService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.progProdOrderService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.progProdOrderService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() progprodorderDTO: ProgprodorderDTO): Promise<Progprodorder001mb> {
		return this.progProdOrderService.create(progprodorderDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() progprodorderDTO: ProgprodorderDTO): Promise<Progprodorder001mb> {
		return this.progProdOrderService.update(progprodorderDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Progprodorder001mb[]> {
		return this.progProdOrderService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Progprodorder001mb> {
		return this.progProdOrderService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.progProdOrderService.remove(id);
	}
}
