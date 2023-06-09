import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { MonthlyattendsheetDTO } from '../dto/Monthlyattendsheet.dto';
import { Monthlyattendsheet001mb } from '../entity/Monthlyattendsheet001mb';
import { MonthlyAttendSheetService } from '../service/month-attend-sheet.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/empmonth')
export class MonthlyAttendSheetController {
    constructor(private readonly monthlyAttendSheetService: MonthlyAttendSheetService) { }


    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.monthlyAttendSheetService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.monthlyAttendSheetService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() monthlyattendsheetDTO: MonthlyattendsheetDTO): Promise<Monthlyattendsheet001mb> {
        return this.monthlyAttendSheetService.create(monthlyattendsheetDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() monthlyattendsheetDTO: MonthlyattendsheetDTO): Promise<Monthlyattendsheet001mb> {
        return this.monthlyAttendSheetService.update(monthlyattendsheetDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Monthlyattendsheet001mb[]> {
        return this.monthlyAttendSheetService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Monthlyattendsheet001mb> {
        return this.monthlyAttendSheetService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.monthlyAttendSheetService.remove(id);
    }
}
