import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CompanyaccountDTO } from '../dto/Companyaccount.dto';
import { Companyaccount001mb } from '../entity/Companyaccount001mb';
import { ComAccountService } from '../service/com-account.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/comapnyaccounts')
export class ComAccountController {
    constructor(private readonly comaccountService: ComAccountService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.comaccountService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.comaccountService.downloadExcel(request, response);
    }


    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() companyaccountDTO: CompanyaccountDTO): Promise<Companyaccount001mb> {
        return this.comaccountService.create(companyaccountDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() companyaccountDTO: CompanyaccountDTO): Promise<Companyaccount001mb> {
        return this.comaccountService.update(companyaccountDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Companyaccount001mb[]> {
        return this.comaccountService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Companyaccount001mb> {
        return this.comaccountService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.comaccountService.remove(id);
    }
}
