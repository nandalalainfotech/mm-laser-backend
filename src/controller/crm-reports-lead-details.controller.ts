import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LeaddetailDTO } from '../dto/Leaddetail.dto';
import { Leaddetail001mb } from '../entity/Leaddetail001mb';
import { CrmRepLeadDetailsService } from '../service/crm-reports-lead-details.servicee';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/leaddetails')
export class CrmRepLeadDetailsController {
	constructor(private readonly leadDetailsService: CrmRepLeadDetailsService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		console.log("called->pdf");

		return await this.leadDetailsService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {

		return await this.leadDetailsService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() leaddetailDTO: LeaddetailDTO): Promise<Leaddetail001mb> {
		return this.leadDetailsService.create(leaddetailDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() leaddetailDTO: LeaddetailDTO): Promise<Leaddetail001mb> {
		return this.leadDetailsService.update(leaddetailDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Leaddetail001mb[]> {
		return this.leadDetailsService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Leaddetail001mb> {
		return this.leadDetailsService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: string): Promise<void> {
		return this.leadDetailsService.remove(id);
	}
}
