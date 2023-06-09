import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { SetupcugrpDTO } from '../dto/Setupcugrp.dto';
import { Setupcugrp001mb } from '../entity/Setupcugrp001mb';
import { CrmCustGroupService } from '../service/crm-cust-group.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/crmcustgroup')
export class CrmCustGroupController {
	constructor(private readonly crmCustGroupService: CrmCustGroupService) { }


	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		console.log("called->pdf");

		return await this.crmCustGroupService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {

		return await this.crmCustGroupService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() setupcugrpDTO: SetupcugrpDTO): Promise<Setupcugrp001mb> {
		return this.crmCustGroupService.create(setupcugrpDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() setupcugrpDTO: SetupcugrpDTO): Promise<Setupcugrp001mb> {
		return this.crmCustGroupService.update(setupcugrpDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Setupcugrp001mb[]> {
		return this.crmCustGroupService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Setupcugrp001mb> {
		return this.crmCustGroupService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.crmCustGroupService.remove(id);
	}
}

