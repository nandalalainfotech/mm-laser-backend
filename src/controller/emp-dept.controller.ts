import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { DepartmentDTO } from '../dto/Department.dto';
import { Department001mb } from '../entity/Department001mb';
import { EmpDeptService } from '../service/emp-dept.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');



@Controller('/testandreportstudio/api/department')
export class EmpDeptController {
    constructor(private readonly empDeptService: EmpDeptService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.empDeptService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.empDeptService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() departmentDTO: DepartmentDTO): Promise<Department001mb> {
        return this.empDeptService.create(departmentDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() departmentDTO: DepartmentDTO): Promise<Department001mb> {
        return this.empDeptService.update(departmentDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Department001mb[]> {
        return this.empDeptService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Department001mb> {
        return this.empDeptService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.empDeptService.remove(id);
    }
}
