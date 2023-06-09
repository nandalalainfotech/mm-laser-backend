import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LeavetypeDTO } from '../dto/Leavetype.dto';
import { Leavetype001mb } from '../entity/Leavetype001mb';
import { LeaveTypeService } from '../service/leave-type.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');



@Controller('/testandreportstudio/api/leavetype')
export class LeaveTypeController {
	constructor(private readonly leaveTypeService: LeaveTypeService) { }


	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.leaveTypeService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.leaveTypeService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() leavetypeDTO: LeavetypeDTO): Promise<Leavetype001mb> {
		return this.leaveTypeService.create(leavetypeDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() leavetypeDTO: LeavetypeDTO): Promise<Leavetype001mb> {
		return this.leaveTypeService.update(leavetypeDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Leavetype001mb[]> {
		return this.leaveTypeService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Leavetype001mb> {
		return this.leaveTypeService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.leaveTypeService.remove(id);
	}
}

