import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PayrollDTO } from '../dto/Payroll.dto';
import { Payroll001mb } from '../entity/Payroll001mb';
import { PayRollsService } from '../service/payrolls.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/payroll')
export class PayRollsController {
	constructor(private readonly payrollsService: PayRollsService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.payrollsService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.payrollsService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() payrollDTO: PayrollDTO): Promise<Payroll001mb> {
		return this.payrollsService.create(payrollDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() payrollDTO: PayrollDTO): Promise<Payroll001mb> {
		return this.payrollsService.update(payrollDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Payroll001mb[]> {
		return this.payrollsService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Payroll001mb> {
		return this.payrollsService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.payrollsService.remove(id);
	}
}
