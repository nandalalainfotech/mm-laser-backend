import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PaymententryDTO } from '../dto/Paymententry.dto';
import { Paymententry001mb } from '../entity/Paymententry001mb';
import { PayementEntryService } from '../service/payement-entry.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/payementEntry')
export class PayementEntryController {
	constructor(private readonly payementEntryService: PayementEntryService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.payementEntryService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.payementEntryService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() paymententryDTO: PaymententryDTO): Promise<Paymententry001mb> {
		return this.payementEntryService.create(paymententryDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() paymententryDTO: PaymententryDTO): Promise<Paymententry001mb> {
		return this.payementEntryService.update(paymententryDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Paymententry001mb[]> {
		return this.payementEntryService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Paymententry001mb> {
		return this.payementEntryService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.payementEntryService.remove(id);
	}
}

