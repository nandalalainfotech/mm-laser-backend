import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RecruitopeningDTO } from '../dto/Recruitopening.dto';
import { Recruitopening001mb } from '../entity/Recruitopening001mb';
import { JobOpeningService } from '../service/job-opening.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/jobopening')
export class JobOpeningController {
    constructor(private readonly jobOpeningService: JobOpeningService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.jobOpeningService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.jobOpeningService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() recruitopeningDTO: RecruitopeningDTO): Promise<Recruitopening001mb> {
        return this.jobOpeningService.create(recruitopeningDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() recruitopeningDTO: RecruitopeningDTO): Promise<Recruitopening001mb> {
        return this.jobOpeningService.update(recruitopeningDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Recruitopening001mb[]> {
        return this.jobOpeningService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Recruitopening001mb> {
        return this.jobOpeningService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.jobOpeningService.remove(id);
    }
}
