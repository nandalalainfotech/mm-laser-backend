import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PricingruleDTO } from "../dto/Pricingrule.dto";
import { Pricingrule001mb } from "../entity/Pricingrule001mb";
import { PricingRuleService } from "../service/pricing-rule.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/prrule')
export class PricingRuleController {
    constructor(private readonly pricingRuleService: PricingRuleService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.pricingRuleService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.pricingRuleService.downloadExcel(request, response);
    }


    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() PricingruleDTO: PricingruleDTO): Promise<Pricingrule001mb> {
        return this.pricingRuleService.create(PricingruleDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() PricingruleDTO: PricingruleDTO): Promise<Pricingrule001mb> {
        return this.pricingRuleService.update(PricingruleDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Pricingrule001mb[]> {
        return this.pricingRuleService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Pricingrule001mb> {
        return this.pricingRuleService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.pricingRuleService.remove(id);
    }
}
