import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { SalesorderDTO } from '../dto/Salesorder.dto';
import { Salesorder001mb } from '../entity/Salesorder001mb';
import { SalseOrderService } from '../service/salse-order.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/salseorder')
export class SalseOrderController {
    constructor(private readonly salseorderService: SalseOrderService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.salseorderService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.salseorderService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() salesorderDTO: SalesorderDTO): Promise<Salesorder001mb> {
        return this.salseorderService.create(salesorderDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() salesorderDTO: SalesorderDTO): Promise<Salesorder001mb> {
        return this.salseorderService.update(salesorderDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Salesorder001mb[]> {
        return this.salseorderService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Salesorder001mb> {
        return this.salseorderService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.salseorderService.remove(id);
    }
}