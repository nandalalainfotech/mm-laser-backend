import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RecruitrelievingDTO } from '../dto/Recruitrelieving.dto';
import { Recruitrelieving001mb } from '../entity/Recruitrelieving001mb';
import { RelievingLetterService } from '../service/relieving-letter.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/relievingletter')
export class RelievingLetterController {
    constructor(private readonly relievingLetterService: RelievingLetterService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.relievingLetterService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.relievingLetterService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() recruitrelievingDTO: RecruitrelievingDTO): Promise<Recruitrelieving001mb> {
        return this.relievingLetterService.create(recruitrelievingDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() recruitrelievingDTO: RecruitrelievingDTO): Promise<Recruitrelieving001mb> {
        return this.relievingLetterService.update(recruitrelievingDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Recruitrelieving001mb[]> {
        return this.relievingLetterService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Recruitrelieving001mb> {
        return this.relievingLetterService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.relievingLetterService.remove(id);
    }
}
