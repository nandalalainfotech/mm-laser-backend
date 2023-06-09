import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CrmspcustDTO } from "../dto/Crmspcust.dto";
import { Crmspcust001mb } from "../entity/Crmspcust001mb";
import { CrmSalesCustomerService } from "../service/crm-sales-customer.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('testandreportstudio/api/customersale')

export class CrmSalesCustomerController {

    constructor(private readonly crmSalesCustomer: CrmSalesCustomerService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.crmSalesCustomer.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.crmSalesCustomer.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() crmspcustDTO: CrmspcustDTO): Promise<Crmspcust001mb> {
        return this.crmSalesCustomer.create(crmspcustDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() crmspcustDTO: CrmspcustDTO): Promise<Crmspcust001mb> {
        return this.crmSalesCustomer.update(crmspcustDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Crmspcust001mb[]> {
        return this.crmSalesCustomer.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Crmspcust001mb> {
        return this.crmSalesCustomer.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.crmSalesCustomer.remove(id);
    }
}