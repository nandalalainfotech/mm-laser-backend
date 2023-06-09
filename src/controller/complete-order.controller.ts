import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CompprodorderDTO } from '../dto/Compprodorder.dto';
import { Compprodorder001mb } from '../entity/Compprodorder001mb';
import { CompleteOrderService } from '../service/complete-order.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/compprodorder')
export class CompleteOrderController {
    constructor(private readonly completeOrderService: CompleteOrderService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.completeOrderService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.completeOrderService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() compprodorderDTO: CompprodorderDTO): Promise<Compprodorder001mb> {
        return this.completeOrderService.create(compprodorderDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() compprodorderDTO: CompprodorderDTO): Promise<Compprodorder001mb> {
        return this.completeOrderService.update(compprodorderDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Compprodorder001mb[]> {
        return this.completeOrderService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Compprodorder001mb> {
        return this.completeOrderService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.completeOrderService.remove(id);
    }
}
