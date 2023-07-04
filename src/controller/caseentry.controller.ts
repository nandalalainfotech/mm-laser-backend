import { Body, Controller, Delete, Get, Header, Param, Post, Put, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { CaseentryDTO } from "src/dto/Caseentry.dto";
import { Caseentry001mb } from "src/entity/Caseentry001mb";
import { CaseentryService } from "src/service/caseentry.service";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/caseentry')
export class CaseentryController {
    constructor(private readonly caseentryService: CaseentryService) { }

    @Get('pdf/:id')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Param('id') id: number, @Res() response: Response) {
        return await this.caseentryService.downloadPdf(id, response);
    }

    // @Get('pdf/:id')
    // @Header('Content-Type', 'application/pdf')
    // async downloadIDPdf(@Param('id') id: number, @Res() response: Response) {
    //     // console.log("id------------------", id);
    //     return await this.caseentryService.downloadIDPdf(id, response);
    // }



    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() caseentryDTO: CaseentryDTO): Promise<Caseentry001mb> {
        return this.caseentryService.create(caseentryDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() caseentryDTO: CaseentryDTO): Promise<Caseentry001mb> {
        return this.caseentryService.update(caseentryDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll/:username')
    findAll(@Param('username') username: any): Promise<CaseentryDTO[]> {
        return this.caseentryService.findAll(username);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<CaseentryDTO> {
        return this.caseentryService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.caseentryService.remove(id);
    }
}