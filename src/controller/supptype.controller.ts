import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { SupptypeDTO } from '../dto/Supptype.dto';
import { Supptype001mb } from '../entity/Supptype001mb';
import { SuppTypeService } from '../service/supptype.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/suppliertype')
export class SuppTypeController {
	constructor(private readonly supptypeService: SuppTypeService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.supptypeService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.supptypeService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() supptype: SupptypeDTO): Promise<Supptype001mb> {
		return this.supptypeService.create(supptype);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() supptype: SupptypeDTO): Promise<Supptype001mb> {
		return this.supptypeService.update(supptype);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Supptype001mb[]> {
		return this.supptypeService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Supptype001mb> {
		return this.supptypeService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.supptypeService.remove(id);
	}
}
