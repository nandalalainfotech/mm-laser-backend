import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BomtypeDTO } from '../dto/Bomtype.dto';
import { Bomtype001mb } from '../entity/Bomtype001mb';
import { BomTypeService } from '../service/bom-type.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/bomtype')
export class BomTypeController {
    constructor(private readonly bomTypeService: BomTypeService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.bomTypeService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.bomTypeService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() bomtypeDTO: BomtypeDTO): Promise<Bomtype001mb> {
        return this.bomTypeService.create(bomtypeDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() bomtypeDTO: BomtypeDTO): Promise<Bomtype001mb> {
        return this.bomTypeService.update(bomtypeDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Bomtype001mb[]> {
        return this.bomTypeService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Bomtype001mb> {
        return this.bomTypeService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.bomTypeService.remove(id);
    }
}
