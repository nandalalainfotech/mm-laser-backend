import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { InstalnoteDTO } from '../dto/Instalnote.dto';
import { Instalnote001mb } from '../entity/Instalnote001mb';
import { ToolsInstallNoteService } from '../service/tool-installnote.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/install')
export class ToolsInstallNoteController {
	constructor(private readonly installNoteService: ToolsInstallNoteService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		console.log("called->pdf");

		return await this.installNoteService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {

		return await this.installNoteService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() instalnoteDTO: InstalnoteDTO): Promise<Instalnote001mb> {
		return this.installNoteService.create(instalnoteDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() instalnoteDTO: InstalnoteDTO): Promise<Instalnote001mb> {
		return this.installNoteService.update(instalnoteDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Instalnote001mb[]> {
		return this.installNoteService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Instalnote001mb> {
		return this.installNoteService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.installNoteService.remove(id);
	}
}
