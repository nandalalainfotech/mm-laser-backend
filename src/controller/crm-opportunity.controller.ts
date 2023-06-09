import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CrmspoppoDTO } from "../dto/Crmspoppo.dto";
import { Crmspoppo001mb } from "../entity/Crmspoppo001mb";
import { CrmOpportunityService } from "../service/crm-opportunity.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/opportunity')

export class CrmOpportunityController {

    constructor (private readonly crmOpportunityService: CrmOpportunityService) {}

    @Get('pdf')
    @Header('Content-Type','application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        

        return await this.crmOpportunityService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.crmOpportunityService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() crmspoppoDTO: CrmspoppoDTO): Promise<Crmspoppo001mb> {
        return this.crmOpportunityService.create(crmspoppoDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() crmspoppoDTO: CrmspoppoDTO): Promise<Crmspoppo001mb> {
        return this.crmOpportunityService.update(crmspoppoDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Crmspoppo001mb[]> {
        return this.crmOpportunityService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(": id")
    findOne(@Param("id") id: string): Promise<Crmspoppo001mb> {
        return this.crmOpportunityService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.crmOpportunityService.remove(id);
    }
}