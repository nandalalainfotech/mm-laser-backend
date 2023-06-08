import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { EmpattendanceDTO } from "../dto/Empattendance.dto";
import { Empattendance001mb } from "../entity/Empattendance001mb";
import { EmpAttendanceService } from "../service/emp-attendance.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/attendance')
export class EmpAttendanceController {
    constructor(private readonly empAttendanceService: EmpAttendanceService) { }
    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.empAttendanceService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.empAttendanceService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() empattendanceDTO: EmpattendanceDTO): Promise<Empattendance001mb> {
        return this.empAttendanceService.create(empattendanceDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() empattendanceDTO: EmpattendanceDTO): Promise<Empattendance001mb> {
        return this.empAttendanceService.update(empattendanceDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Empattendance001mb[]> {
        return this.empAttendanceService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Empattendance001mb> {
        return this.empAttendanceService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.empAttendanceService.remove(id);
    }
}
