import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { EmploymenttypeDTO } from "../dto/Employmenttype.dto";
import { Employmenttype001mb } from "../entity/Employmenttype001mb";
import { EmploymentTypeService } from "../service/employment-type.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/emptype')
export class EmploymentTypeController {
    constructor(private readonly employmentTypeService: EmploymentTypeService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.employmentTypeService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.employmentTypeService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() employmenttypeDTO: EmploymenttypeDTO): Promise<Employmenttype001mb> {
        return this.employmentTypeService.create(employmenttypeDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() employmenttypeDTO: EmploymenttypeDTO): Promise<Employmenttype001mb> {
        return this.employmentTypeService.update(employmenttypeDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Employmenttype001mb[]> {
        return this.employmentTypeService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Employmenttype001mb> {
        return this.employmentTypeService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.employmentTypeService.remove(id);
    }
}
