import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PeriodclosingvoucherDTO } from '../dto/Periodclosingvoucher.dto';
import { Periodclosingvoucher001mb } from '../entity/Periodclosingvoucher001mb';
import { PeriodclosingVoucherService } from '../service/periodclosing-voucher.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/periodclosevoucher')
export class PeriodclosingVoucherController {
    constructor(private readonly periodclosingVoucherService: PeriodclosingVoucherService) { }


    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.periodclosingVoucherService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.periodclosingVoucherService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() periodclosingvoucherDTO: PeriodclosingvoucherDTO): Promise<Periodclosingvoucher001mb> {
        return this.periodclosingVoucherService.create(periodclosingvoucherDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() periodclosingvoucherDTO: PeriodclosingvoucherDTO): Promise<Periodclosingvoucher001mb> {
        return this.periodclosingVoucherService.update(periodclosingvoucherDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Periodclosingvoucher001mb[]> {
        return this.periodclosingVoucherService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Periodclosingvoucher001mb> {
        return this.periodclosingVoucherService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.periodclosingVoucherService.remove(id);
    }
}
