import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PrreqquotDTO } from '../dto/Prreqquot.dto';
import { Prreqquot001mb } from '../entity/Prreqquot001mb';
import { PrreqQuotService } from '../service/prreq-quot.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/prreqquot')
export class PrreqQuotController {
	constructor(private readonly prreqQuotService: PrreqQuotService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.prreqQuotService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.prreqQuotService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() prreqquotDTO: PrreqquotDTO): Promise<Prreqquot001mb> {
		return this.prreqQuotService.create(prreqquotDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() prreqquotDTO: PrreqquotDTO): Promise<Prreqquot001mb> {
		return this.prreqQuotService.update(prreqquotDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Prreqquot001mb[]> {
		return this.prreqQuotService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Prreqquot001mb> {
		return this.prreqQuotService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.prreqQuotService.remove(id);
	}
}

