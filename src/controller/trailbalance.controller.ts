import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { TrialbalanceDTO } from "../dto/Trialbalance.dto";
import { Trialbalance001mb } from "../entity/Trialbalance001mb";
import { TrailBalanceservice } from "../service/trailbalance.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/trialbalance')
export class TrailBalancecontroller {
	constructor(private readonly trailbalanceservice: TrailBalanceservice) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.trailbalanceservice.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.trailbalanceservice.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() trialbalanceDTO: TrialbalanceDTO): Promise<Trialbalance001mb> {
		return this.trailbalanceservice.create(trialbalanceDTO)
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() trialbalanceDTO: TrialbalanceDTO): Promise<Trialbalance001mb> {
		return this.trailbalanceservice.create(trialbalanceDTO)
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Trialbalance001mb[]> {
		return this.trailbalanceservice.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Trialbalance001mb> {
		return this.trailbalanceservice.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.trailbalanceservice.remove(id);
	}
}