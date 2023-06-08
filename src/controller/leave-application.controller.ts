import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LeaveappDTO } from '../dto/Leaveapp.dto';
import { Leaveapp001mb } from '../entity/Leaveapp001mb';
import { LeaveApplicationService } from '../service/leave-application.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/leaveapp')
export class LeaveApplicationController {
	constructor(private readonly leaveApplicationService: LeaveApplicationService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.leaveApplicationService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.leaveApplicationService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() leaveappDTO: LeaveappDTO): Promise<Leaveapp001mb> {
		return this.leaveApplicationService.create(leaveappDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() leaveappDTO: LeaveappDTO): Promise<Leaveapp001mb> {
		return this.leaveApplicationService.update(leaveappDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Leaveapp001mb[]> {
		return this.leaveApplicationService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Leaveapp001mb> {
		return this.leaveApplicationService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.leaveApplicationService.remove(id);
	}
}

