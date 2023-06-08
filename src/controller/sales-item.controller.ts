import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ItemdtDTO } from "../dto/Itemdt.dto";
import { Itemdt001mb } from "../entity/Itemdt001mb";
import { SalesItemService } from "../service/sales-item.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/salesitem')
export class SalesItemController {
    constructor(private readonly salesItemService: SalesItemService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.salesItemService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.salesItemService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() itemdtDTO: ItemdtDTO): Promise<Itemdt001mb> {
        return this.salesItemService.create(itemdtDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() itemdtDTO: ItemdtDTO): Promise<Itemdt001mb> {
        return this.salesItemService.update(itemdtDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Itemdt001mb[]> {
        return this.salesItemService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Itemdt001mb> {
        return this.salesItemService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.salesItemService.remove(id);
    }
}

