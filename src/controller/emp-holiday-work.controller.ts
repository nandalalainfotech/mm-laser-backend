import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { EmpworkonholidayDTO } from '../dto/Empworkonholiday.dto';
import { Empworkonholiday001mb } from '../entity/Empworkonholiday001mb';
import { EmployeeHolidayWorkService } from '../service/emp-holiday-work.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/empholiday')
export class EmployeeHolidayWorkController {
    constructor(private readonly employeeHolidayWorkService: EmployeeHolidayWorkService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.employeeHolidayWorkService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.employeeHolidayWorkService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() empworkonholidayDTO: EmpworkonholidayDTO): Promise<Empworkonholiday001mb> {
        return this.employeeHolidayWorkService.create(empworkonholidayDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() empworkonholidayDTO: EmpworkonholidayDTO): Promise<Empworkonholiday001mb> {
        return this.employeeHolidayWorkService.update(empworkonholidayDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Empworkonholiday001mb[]> {
        return this.employeeHolidayWorkService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Empworkonholiday001mb> {
        return this.employeeHolidayWorkService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.employeeHolidayWorkService.remove(id);
    }
}
