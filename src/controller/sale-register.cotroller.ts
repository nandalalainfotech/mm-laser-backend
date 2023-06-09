import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { SalesregisterDTO } from "../dto/Salesregister.dto";
import { Salesregister001mb } from "../entity/Salesregister001mb";
import { SalesRegisterService } from "../service/sale-register.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/saleregister')
export class SalesRegisterController {
    constructor(private readonly salesRegisterService: SalesRegisterService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.salesRegisterService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.salesRegisterService.downloadExcel(request, response);
    }


    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() salesregisterDTO: SalesregisterDTO): Promise<Salesregister001mb> {
        return this.salesRegisterService.create(salesregisterDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() salesregisterDTO: SalesregisterDTO): Promise<Salesregister001mb> {
        return this.salesRegisterService.update(salesregisterDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Salesregister001mb[]> {
        return this.salesRegisterService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Salesregister001mb> {
        return this.salesRegisterService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.salesRegisterService.remove(id);
    }
}
