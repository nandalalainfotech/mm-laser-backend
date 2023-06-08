import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { OperationbomDTO } from '../dto/Operationbom.dto';
import { Operationbom001mb } from '../entity/Operationbom001mb';
import { OperationService } from '../service/operation.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/operationbom')

export class OperationController {

    constructor(private readonly operationService: OperationService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.operationService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.operationService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() operationbomDTO: OperationbomDTO): Promise<Operationbom001mb> {
        return this.operationService.create(operationbomDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() operationbomDTO: OperationbomDTO): Promise<Operationbom001mb> {
        return this.operationService.update(operationbomDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Operationbom001mb[]> {
        return this.operationService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Operationbom001mb> {
        return this.operationService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.operationService.remove(id);
    }
}