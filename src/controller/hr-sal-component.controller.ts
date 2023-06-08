import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { SalarycomponentDTO } from '../dto/Salarycomponent.dto';
import { Salarycomponent001mb } from '../entity/Salarycomponent001mb';
import { HrSalComponentService } from '../service/hr-sal-component.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/component')
export class HrSalComponentController {
	constructor(private readonly salComponentService: HrSalComponentService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.salComponentService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.salComponentService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() salarycomponentDTO: SalarycomponentDTO): Promise<Salarycomponent001mb> {
		return this.salComponentService.create(salarycomponentDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() salarycomponentDTO: SalarycomponentDTO): Promise<Salarycomponent001mb> {
		return this.salComponentService.update(salarycomponentDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Salarycomponent001mb[]> {
		return this.salComponentService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Salarycomponent001mb> {
		return this.salComponentService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.salComponentService.remove(id);
	}
}
