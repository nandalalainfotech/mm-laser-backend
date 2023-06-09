import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AppraisalDTO } from '../dto/Appraisal.dto';
import { Appraisal001mb } from '../entity/Appraisal001mb';
import { AppraisalService } from '../service/appraisal.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/appraisal')

export class AppraisalController {

    constructor(private readonly appraisalservice: AppraisalService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.appraisalservice.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.appraisalservice.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() appraisalDTO: AppraisalDTO): Promise<Appraisal001mb> {
        return this.appraisalservice.create(appraisalDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() appraisalDTO: AppraisalDTO): Promise<Appraisal001mb> {
        return this.appraisalservice.update(appraisalDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Appraisal001mb[]> {
        return this.appraisalservice.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(": id")
    findOne(@Param("id") id: string): Promise<Appraisal001mb> {
        return this.appraisalservice.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: number): Promise<void> {
        return this.appraisalservice.remove(id);
    }
}