import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ShippingruleDTO } from "../dto/Shippingrule.dto";
import { Shippingrule001mb } from "../entity/Shippingrule001mb";
import { ShippingRuleService } from "../service/shipping-rule.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/shiprule')
export class ShippingRuleController {
	constructor(private readonly shippingRuleService: ShippingRuleService) { }

	@Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.shippingRuleService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.shippingRuleService.downloadExcel(request, response);
	}

	@UseGuards(JwtAuthGuard)
	@Post("save")
	create(@Body() shippingruleDTO: ShippingruleDTO): Promise<Shippingrule001mb> {
		return this.shippingRuleService.create(shippingruleDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Put("update")
	update(@Body() shippingruleDTO: ShippingruleDTO): Promise<Shippingrule001mb> {
		return this.shippingRuleService.update(shippingruleDTO);
	}

	@UseGuards(JwtAuthGuard)
	@Get('findAll')
	findAll(): Promise<Shippingrule001mb[]> {
		return this.shippingRuleService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string): Promise<Shippingrule001mb> {
		return this.shippingRuleService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete/:id')
	remove(@Param('id') id: number): Promise<void> {
		return this.shippingRuleService.remove(id);
	}
}

