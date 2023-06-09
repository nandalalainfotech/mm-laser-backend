import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { StksettingsDTO } from '../dto/Stksettings.dto';
import { Stksettings001mb } from '../entity/Stksettings001mb';
import { StockSettingService } from '../service/stk-setting.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/stksetting')
export class StockSettingController {
    constructor(private readonly stocksettingService: StockSettingService) { }

    @Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.stocksettingService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.stocksettingService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() stksettingsDTO: StksettingsDTO): Promise<Stksettings001mb> {
        return this.stocksettingService.create(stksettingsDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() stksettingsDTO: StksettingsDTO): Promise<Stksettings001mb> {
        return this.stocksettingService.update(stksettingsDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Stksettings001mb[]> {
        return this.stocksettingService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Stksettings001mb> {
        return this.stocksettingService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.stocksettingService.remove(id);
    }
}
