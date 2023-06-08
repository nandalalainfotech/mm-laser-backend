import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ItemshortagerepDTO } from '../dto/Itemshortagerep.dto';
import { Itemshortagerep001mb } from '../entity/Itemshortagerep001mb';
import { ItemShortageService } from '../service/item-shortage.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/itemshortage')

export class ItemShortageController {
	constructor(private readonly itemShortageService: ItemShortageService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.itemShortageService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.itemShortageService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() itemshortagerepDTO: ItemshortagerepDTO): Promise<Itemshortagerep001mb> {
		return this.itemShortageService.create(itemshortagerepDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() itemshortagerepDTO: ItemshortagerepDTO): Promise<Itemshortagerep001mb> {
		return this.itemShortageService.update(itemshortagerepDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Itemshortagerep001mb[]> {
		return this.itemShortageService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Itemshortagerep001mb> {
		return this.itemShortageService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.itemShortageService.remove(id);
	}
}

