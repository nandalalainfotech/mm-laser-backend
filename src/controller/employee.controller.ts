import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { EmployeeDTO } from '../dto/Employee.dto';
import { Employee001mb } from '../entity/Employee001mb';
import { EmployeeService } from '../service/employee.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.employeeService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.employeeService.downloadExcel(request, response);
    }


    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() employeeDTO: EmployeeDTO): Promise<Employee001mb> {
        return this.employeeService.create(employeeDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() employeeDTO: EmployeeDTO): Promise<Employee001mb> {
        return this.employeeService.update(employeeDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Employee001mb[]> {
        return this.employeeService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Employee001mb> {
        return this.employeeService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.employeeService.remove(id);
    }
}
