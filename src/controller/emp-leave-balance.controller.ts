import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { EmpleavebalanceDTO } from '../dto/Empleavebalance.dto';
import { Empleavebalance001mb } from '../entity/Empleavebalance001mb';
import { EmployeeLeaveBalanceService } from '../service/emp-leave-balance.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/empleave')
export class EmployeeLeaveBalanceController {
    constructor(private readonly employeeLeaveBalanceService: EmployeeLeaveBalanceService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.employeeLeaveBalanceService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.employeeLeaveBalanceService.downloadExcel(request, response);
    }


    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() empleavebalanceDTO: EmpleavebalanceDTO): Promise<Empleavebalance001mb> {
        return this.employeeLeaveBalanceService.create(empleavebalanceDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() empleavebalanceDTO: EmpleavebalanceDTO): Promise<Empleavebalance001mb> {
        return this.employeeLeaveBalanceService.update(empleavebalanceDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Empleavebalance001mb[]> {
        return this.employeeLeaveBalanceService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Empleavebalance001mb> {
        return this.employeeLeaveBalanceService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.employeeLeaveBalanceService.remove(id);
    }
}