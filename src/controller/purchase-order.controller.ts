import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PrpurchaseordDTO } from '../dto/Prpurchaseord.dto';
import { Prpurchaseord001mb } from '../entity/Prpurchaseord001mb';
import { PurchaseOrderService } from '../service/purchase-order.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/purchaseorder')
export class PurchaseOrderController {
	constructor(private readonly purchaseOrderService: PurchaseOrderService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.purchaseOrderService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.purchaseOrderService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() prpurchaseordDTO: PrpurchaseordDTO): Promise<Prpurchaseord001mb> {
		return this.purchaseOrderService.create(prpurchaseordDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() prpurchaseordDTO: PrpurchaseordDTO): Promise<Prpurchaseord001mb> {
		return this.purchaseOrderService.update(prpurchaseordDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Prpurchaseord001mb[]> {
		return this.purchaseOrderService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: number): Promise<Prpurchaseord001mb> {
		return this.purchaseOrderService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.purchaseOrderService.remove(id);
	}
}

