import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AccountchartDTO } from '../dto/Accountchart.dto';
import { Accountchart001mb } from '../entity/Accountchart001mb';
import { AccountChartService } from '../service/account-chart.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/accchart')
export class AccountChartController {
    constructor(private readonly accountChartService: AccountChartService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.accountChartService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.accountChartService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() AccountchartDTO: AccountchartDTO): Promise<Accountchart001mb> {
        return this.accountChartService.create(AccountchartDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() accountchartDTO: AccountchartDTO): Promise<Accountchart001mb> {
        return this.accountChartService.update(accountchartDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Accountchart001mb[]> {
        return this.accountChartService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Accountchart001mb> {
        return this.accountChartService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.accountChartService.remove(id);
    }
}
