import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ProdbundleDTO } from "../dto/Prodbundle.dto";
import { Prodbundle001mb } from "../entity/Prodbundle001mb";
import { ProdBundleService } from "../service/prod-bundle.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/prbundle')
export class ProdBundleController {
    constructor(private readonly prodBundleService: ProdBundleService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.prodBundleService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.prodBundleService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() prodbundleDTO: ProdbundleDTO): Promise<Prodbundle001mb> {
        return this.prodBundleService.create(prodbundleDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() prodbundleDTO: ProdbundleDTO): Promise<Prodbundle001mb> {
        return this.prodBundleService.update(prodbundleDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Prodbundle001mb[]> {
        return this.prodBundleService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Prodbundle001mb> {
        return this.prodBundleService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.prodBundleService.remove(id);
    }
}