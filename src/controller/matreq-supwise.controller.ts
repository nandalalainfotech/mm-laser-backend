import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { MatreqsunotcreateDTO } from "../dto/Matreqsunotcreate.dto";
import { Matreqsunotcreate001mb } from "../entity/Matreqsunotcreate001mb";
import { MatreqSupwiseService } from "../service/matreq-supwise.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/matreqsup')
export class MatreqSupwiseController {
    constructor(private readonly matreqSupwiseService: MatreqSupwiseService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.matreqSupwiseService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.matreqSupwiseService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() matreqsunotcreateDTO: MatreqsunotcreateDTO): Promise<Matreqsunotcreate001mb> {
        return this.matreqSupwiseService.create(matreqsunotcreateDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() matreqsunotcreateDTO: MatreqsunotcreateDTO): Promise<Matreqsunotcreate001mb> {
        return this.matreqSupwiseService.create(matreqsunotcreateDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Matreqsunotcreate001mb[]> {
        return this.matreqSupwiseService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Matreqsunotcreate001mb> {
        return this.matreqSupwiseService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.matreqSupwiseService.remove(id);
    }
}