import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { InactivecustDTO } from '../dto/Inactivecust.dto';
import { Inactivecust001mb } from '../entity/Inactivecust001mb';
import { CrmRepInactiveCustomerService } from '../service/crm-rep-inactivecus.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/inactive')
export class CrmRepInactiveCustomerController {
	constructor(private readonly inactiveCustomerService: CrmRepInactiveCustomerService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		console.log("called->pdf");

		return await this.inactiveCustomerService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {

		return await this.inactiveCustomerService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() inactivecustDTO: InactivecustDTO): Promise<Inactivecust001mb> {
		return this.inactiveCustomerService.create(inactivecustDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() inactivecustDTO: InactivecustDTO): Promise<Inactivecust001mb> {
		return this.inactiveCustomerService.update(inactivecustDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Inactivecust001mb[]> {
		return this.inactiveCustomerService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Inactivecust001mb> {
		return this.inactiveCustomerService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.inactiveCustomerService.remove(id);
	}
}
