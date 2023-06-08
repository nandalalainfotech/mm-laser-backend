import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { SalarystructureDTO } from '../dto/Salarystructure.dto';
import { Salarystructure001mb } from '../entity/Salarystructure001mb';
import { HrSalaryStructureService } from '../service/hr-sal-structure.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/salary')
export class HrSalaryStructureController {
	constructor(private readonly salaryStructureService: HrSalaryStructureService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.salaryStructureService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.salaryStructureService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() salarystructureDTO: SalarystructureDTO): Promise<Salarystructure001mb> {
		return this.salaryStructureService.create(salarystructureDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() salarystructureDTO: SalarystructureDTO): Promise<Salarystructure001mb> {
		return this.salaryStructureService.update(salarystructureDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Salarystructure001mb[]> {
		return this.salaryStructureService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Salarystructure001mb> {
		return this.salaryStructureService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.salaryStructureService.remove(id);
	}
}
