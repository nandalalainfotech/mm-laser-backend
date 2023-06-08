import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { SalestaxesandtemplatesDTO } from "../dto/Salestaxesandtemplates.dto";
import { Salestaxesandtemplates001mb } from "../entity/Salestaxesandtemplates001mb";
import { SalesTaxService } from "../service/sales-taxes.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/salestaxes')
export class SalesTaxController {
	constructor(private readonly salesTaxService: SalesTaxService) { }


	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.salesTaxService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.salesTaxService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() salestaxesandtemplatesDTO: SalestaxesandtemplatesDTO): Promise<Salestaxesandtemplates001mb> {
		return this.salesTaxService.create(salestaxesandtemplatesDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() salestaxesandtemplatesDTO: SalestaxesandtemplatesDTO): Promise<Salestaxesandtemplates001mb> {
		return this.salesTaxService.update(salestaxesandtemplatesDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Salestaxesandtemplates001mb[]> {
		return this.salesTaxService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Salestaxesandtemplates001mb> {
		return this.salesTaxService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.salesTaxService.remove(id);
	}
}