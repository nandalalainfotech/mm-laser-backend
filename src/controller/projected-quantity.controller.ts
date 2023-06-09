import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { StkrepprojectDTO } from "../dto/Stkrepproject.dto";
import { Stkrepproject001mb } from "../entity/Stkrepproject001mb";
import { ProjectQuantityService } from "../service/projected-quantity.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/stkproject')
export class ProjectQuantityController {
	constructor(private readonly projectQuantityService: ProjectQuantityService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		console.log("called->pdf");

		return await this.projectQuantityService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {

		return await this.projectQuantityService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() stkrepprojectDTO: StkrepprojectDTO): Promise<Stkrepproject001mb> {
		return this.projectQuantityService.create(stkrepprojectDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() stkrepprojectDTO: StkrepprojectDTO): Promise<Stkrepproject001mb> {
		return this.projectQuantityService.update(stkrepprojectDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Stkrepproject001mb[]> {
		return this.projectQuantityService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Stkrepproject001mb> {
		return this.projectQuantityService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.projectQuantityService.remove(id);
	}
}
