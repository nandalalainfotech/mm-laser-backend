import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { WarehouseDTO } from '../dto/Warehouse.dto';
import { Warehouse001mb } from '../entity/Warehouse001mb';
import { WareHouseService } from '../service/ware-house.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/wrhouse')
export class WareHouseController {
    constructor(private readonly wareHouseService: WareHouseService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.wareHouseService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.wareHouseService.downloadExcel(request, response);
    }


    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() warehouseDTO: WarehouseDTO): Promise<Warehouse001mb> {
        return this.wareHouseService.create(warehouseDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() warehouseDTO: WarehouseDTO): Promise<Warehouse001mb> {
        return this.wareHouseService.update(warehouseDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Warehouse001mb[]> {
        return this.wareHouseService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Warehouse001mb> {
        return this.wareHouseService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.wareHouseService.remove(id);
    }
}
