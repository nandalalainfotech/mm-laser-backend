import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PurtaxchargesDTO } from "../dto/Purtaxcharges.dto";
import { Purtaxcharges001mb } from "../entity/Purtaxcharges001mb";
import { PurTaxChangesService } from "../service/purtax-changes.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/purtax')
export class PurTaxChangesController {
	constructor(private readonly purTaxChangesService: PurTaxChangesService) { }


	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.purTaxChangesService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.purTaxChangesService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() purtaxchargesDTO: PurtaxchargesDTO): Promise<Purtaxcharges001mb> {
		return this.purTaxChangesService.create(purtaxchargesDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() purtaxchargesDTO: PurtaxchargesDTO): Promise<Purtaxcharges001mb> {
		return this.purTaxChangesService.update(purtaxchargesDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Purtaxcharges001mb[]> {
		return this.purTaxChangesService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Purtaxcharges001mb> {
		return this.purTaxChangesService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.purTaxChangesService.remove(id);
	}
}