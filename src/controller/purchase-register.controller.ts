import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PurchaseregisterDTO } from "../dto/Purchaseregister.dto";
import { Purchaseregister001mb } from "../entity/Purchaseregister001mb";
import { PurchaseRegisterService } from "../service/purchase-register.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/purchaseregister')
export class PurchaseRegisterController {
    constructor(private readonly purchaseRegisterService: PurchaseRegisterService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.purchaseRegisterService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.purchaseRegisterService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() purchaseregisterDTO: PurchaseregisterDTO): Promise<Purchaseregister001mb> {
        return this.purchaseRegisterService.create(purchaseregisterDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() purchaseregisterDTO: PurchaseregisterDTO): Promise<Purchaseregister001mb> {
        return this.purchaseRegisterService.update(purchaseregisterDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Purchaseregister001mb[]> {
        return this.purchaseRegisterService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Purchaseregister001mb> {
        return this.purchaseRegisterService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.purchaseRegisterService.remove(id);
    }
}
