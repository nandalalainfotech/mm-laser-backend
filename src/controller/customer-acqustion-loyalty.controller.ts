import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CustomeracquisitionDTO } from "../dto/Customeracquisition.dto";
import { Customeracquisition001mb } from "../entity/Customeracquisition001mb";
import { CustomerLoyaltyService } from "../service/customer-acqustion-loyalty.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/customerloyal')
export class CustomerLoyaltyController {
    constructor(private readonly customerLoyaltyService: CustomerLoyaltyService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.customerLoyaltyService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.customerLoyaltyService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() customeracquisitionDTO: CustomeracquisitionDTO): Promise<Customeracquisition001mb> {
        return this.customerLoyaltyService.create(customeracquisitionDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() customeracquisitionDTO: CustomeracquisitionDTO): Promise<Customeracquisition001mb> {
        return this.customerLoyaltyService.update(customeracquisitionDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Customeracquisition001mb[]> {
        return this.customerLoyaltyService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Customeracquisition001mb> {
        return this.customerLoyaltyService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.customerLoyaltyService.remove(id);
    }
}

