import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LandcostvouchDTO } from '../dto/Landcostvouch.dto';
import { Landcostvouch001mb } from '../entity/Landcostvouch001mb';
import { ToolsLandCostService } from '../service/tool-landcost.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/land')
export class ToolsLandCostController {
    constructor(private readonly landcostService: ToolsLandCostService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.landcostService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.landcostService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() landcostvouchDTO: LandcostvouchDTO): Promise<Landcostvouch001mb> {
        return this.landcostService.create(landcostvouchDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() landcostvouchDTO: LandcostvouchDTO): Promise<Landcostvouch001mb> {
        return this.landcostService.update(landcostvouchDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Landcostvouch001mb[]> {
        return this.landcostService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Landcostvouch001mb> {
        return this.landcostService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.landcostService.remove(id);
    }
}
