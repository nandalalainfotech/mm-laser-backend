import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { SwsanalyticsDTO } from '../dto/Swsanalytics.dto';
import { Swsanalytics001mb } from '../entity/Swsanalytics001mb';
import { SupplierWiseAnalyticService } from '../service/supplier-wise-analytic.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/supplierwise')

export class SupplierWiseAnalyticController {

    constructor (private readonly supplierWiseAnalyticService: SupplierWiseAnalyticService) {}

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.supplierWiseAnalyticService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.supplierWiseAnalyticService.downloadExcel(request, response);
	}

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() swsanalyticsDTO: SwsanalyticsDTO): Promise<Swsanalytics001mb> {
        return this.supplierWiseAnalyticService.create(swsanalyticsDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() swsanalyticsDTO: SwsanalyticsDTO): Promise<Swsanalytics001mb> {
         return this.supplierWiseAnalyticService.update(swsanalyticsDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Swsanalytics001mb[]> {
        return this.supplierWiseAnalyticService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Swsanalytics001mb> {
        return this.supplierWiseAnalyticService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: number): Promise<void> {
        return this.supplierWiseAnalyticService.remove(id);
    }
}