import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CrmmintorespDTO } from '../dto/Crmmintoresp.dto';
import { Crmmintoresp001mb } from '../entity/Crmmintoresp001mb';
import { CrmRepMiniTimeService } from '../service/crm-rep-minitime.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/minitimeres')
export class CrmRepMiniTimeController {
	constructor(private readonly inactiveCustomerService: CrmRepMiniTimeService) { }

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
	create(@Body() crmmintorespDTO: CrmmintorespDTO): Promise<Crmmintoresp001mb> {
		return this.inactiveCustomerService.create(crmmintorespDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() crmmintorespDTO: CrmmintorespDTO): Promise<Crmmintoresp001mb> {
		return this.inactiveCustomerService.update(crmmintorespDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Crmmintoresp001mb[]> {
		return this.inactiveCustomerService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Crmmintoresp001mb> {
		return this.inactiveCustomerService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.inactiveCustomerService.remove(id);
	}
}
