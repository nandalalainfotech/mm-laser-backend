import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PrsureqDTO } from '../dto/Prsureq.dto';
import { Prsureq001mb } from '../entity/Prsureq001mb';
import { SupplierQuotService } from '../service/supplier-quot.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/supplierquot')
export class SupplierQuotController {
	constructor(private readonly supplierQuotService: SupplierQuotService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.supplierQuotService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.supplierQuotService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() prsureqDTO: PrsureqDTO): Promise<Prsureq001mb> {
		return this.supplierQuotService.create(prsureqDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() prsureqDTO: PrsureqDTO): Promise<Prsureq001mb> {
		return this.supplierQuotService.update(prsureqDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Prsureq001mb[]> {
		return this.supplierQuotService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Prsureq001mb> {
		return this.supplierQuotService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.supplierQuotService.remove(id);
	}
}

