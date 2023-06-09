import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PurorditemreceiveDTO } from '../dto/Purorditemreceive.dto';
import { Purorditemreceive001mb } from '../entity/Purorditemreceive001mb';
import { PurchaseItemDeliverService } from '../service/purchase-item-deliver.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/purchaseitem')
export class PurchaseItemDeliverController {
	constructor(private readonly purchaseItemDeliverService: PurchaseItemDeliverService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.purchaseItemDeliverService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.purchaseItemDeliverService.downloadExcel(request, response);
	}


	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() purorditemreceiveDTO: PurorditemreceiveDTO): Promise<Purorditemreceive001mb> {
		return this.purchaseItemDeliverService.create(purorditemreceiveDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() purorditemreceiveDTO: PurorditemreceiveDTO): Promise<Purorditemreceive001mb> {
		return this.purchaseItemDeliverService.update(purorditemreceiveDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Purorditemreceive001mb[]> {
		return this.purchaseItemDeliverService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Purorditemreceive001mb> {
		return this.purchaseItemDeliverService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.purchaseItemDeliverService.remove(id);
	}
}

