import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PaymentrequestDTO } from '../dto/Paymentrequest.dto';
import { Paymentrequest001mb } from '../entity/Paymentrequest001mb';
import { PayementRequestService } from '../service/payement-request.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/paymentrequest')
export class PayementRequestController {
	constructor(private readonly payementRequestService: PayementRequestService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.payementRequestService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.payementRequestService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() paymentrequestDTO: PaymentrequestDTO): Promise<Paymentrequest001mb> {
		return this.payementRequestService.create(paymentrequestDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() paymentrequestDTO: PaymentrequestDTO): Promise<Paymentrequest001mb> {
		return this.payementRequestService.update(paymentrequestDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Paymentrequest001mb[]> {
		return this.payementRequestService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Paymentrequest001mb> {
		return this.payementRequestService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.payementRequestService.remove(id);
	}
}

