import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PackingslipDTO } from '../dto/Packingslip.dto';
import { Packingslip001mb } from '../entity/Packingslip001mb';
import { ToolsPackingSlipService } from '../service/tools-packingslip.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/packing')
export class ToolsPackageSlipController {
    constructor(private readonly packingSlipService: ToolsPackingSlipService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.packingSlipService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.packingSlipService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() packingslipDTO: PackingslipDTO): Promise<Packingslip001mb> {
        return this.packingSlipService.create(packingslipDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() packingslipDTO: PackingslipDTO): Promise<Packingslip001mb> {
        return this.packingSlipService.update(packingslipDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Packingslip001mb[]> {
        return this.packingSlipService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Packingslip001mb> {
        return this.packingSlipService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.packingSlipService.remove(id);
    }
}
