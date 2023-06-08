import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ChequetemplateDTO } from '../dto/Chequetemplate.dto';
import { Chequetemplate001mb } from '../entity/Chequetemplate001mb';
import { ChequeprintTemplateService } from '../service/chequeprint-template.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/chequeprint')
export class ChequeprintTemplateController {
    constructor(private readonly chequeprintTemplateService: ChequeprintTemplateService) { }


    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.chequeprintTemplateService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.chequeprintTemplateService.downloadExcel(request, response);
    }


    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() chequetemplateDTO: ChequetemplateDTO): Promise<Chequetemplate001mb> {
        return this.chequeprintTemplateService.create(chequetemplateDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() chequetemplateDTO: ChequetemplateDTO): Promise<Chequetemplate001mb> {
        return this.chequeprintTemplateService.update(chequetemplateDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Chequetemplate001mb[]> {
        return this.chequeprintTemplateService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Chequetemplate001mb> {
        return this.chequeprintTemplateService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.chequeprintTemplateService.remove(id);
    }
}
