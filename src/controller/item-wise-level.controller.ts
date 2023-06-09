import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ItemwiselevelDTO } from '../dto/Itemwiselevel.dto';
import { Itemwiselevel001mb } from '../entity/Itemwiselevel001mb';
import { ItemWiseLevelService } from '../service/item-wise-level.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/itemwise')
export class ItemWiseLevelController {
	constructor(private readonly itemWiseLevelService: ItemWiseLevelService) { }


	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.itemWiseLevelService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.itemWiseLevelService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() itemwiselevelDTO: ItemwiselevelDTO): Promise<Itemwiselevel001mb> {
		return this.itemWiseLevelService.create(itemwiselevelDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() itemwiselevelDTO: ItemwiselevelDTO): Promise<Itemwiselevel001mb> {
		return this.itemWiseLevelService.update(itemwiselevelDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Itemwiselevel001mb[]> {
		return this.itemWiseLevelService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Itemwiselevel001mb> {
		return this.itemWiseLevelService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.itemWiseLevelService.remove(id);
	}
}

