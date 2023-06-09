import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PrmatreqDTO } from '../dto/Prmatreq.dto';
import { Prmatreq001mb } from '../entity/Prmatreq001mb';
import { PrmatReqService } from '../service/prmat-req.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/prmatreq')
export class PrmatReqtController {
    constructor(private readonly prmatReqService: PrmatReqService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.prmatReqService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.prmatReqService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() prmatreqDTO: PrmatreqDTO): Promise<Prmatreq001mb> {
        return this.prmatReqService.create(prmatreqDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() prmatreqDTO: PrmatreqDTO): Promise<Prmatreq001mb> {
        return this.prmatReqService.update(prmatreqDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Prmatreq001mb[]> {
        return this.prmatReqService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Prmatreq001mb> {
        return this.prmatReqService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.prmatReqService.remove(id);
    }
}

