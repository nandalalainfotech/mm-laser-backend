import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { TaxruleDTO } from "../dto/Taxrule.dto";
import { Taxrule001mb } from "../entity/Taxrule001mb";
import { TaxRuleService } from "../service/tax-rule.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/taxrule')
export class TaxRuleController {
	constructor(private readonly taxRuleService: TaxRuleService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.taxRuleService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.taxRuleService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() taxruleDTO: TaxruleDTO): Promise<Taxrule001mb> {
		return this.taxRuleService.create(taxruleDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() taxruleDTO: TaxruleDTO): Promise<Taxrule001mb> {
		return this.taxRuleService.update(taxruleDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Taxrule001mb[]> {
		return this.taxRuleService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Taxrule001mb> {
		return this.taxRuleService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.taxRuleService.remove(id);
	}
}
