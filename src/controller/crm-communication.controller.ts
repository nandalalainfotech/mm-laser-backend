import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CommunicationDTO } from '../dto/Communication.dto';
import { Communication001mb } from '../entity/Communication001mb';
import { CrmCommunicationService } from '../service/crm-communication.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/crmcommunication')
export class CrmCommunicationController {
	constructor(private readonly crmCommunicationService: CrmCommunicationService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		console.log("called->pdf");

		return await this.crmCommunicationService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {

		return await this.crmCommunicationService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() communicationDTO: CommunicationDTO): Promise<Communication001mb> {
		return this.crmCommunicationService.create(communicationDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() communicationDTO: CommunicationDTO): Promise<Communication001mb> {
		return this.crmCommunicationService.update(communicationDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Communication001mb[]> {
		return this.crmCommunicationService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Communication001mb> {
		return this.crmCommunicationService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.crmCommunicationService.remove(id);
	}
}

