import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ItemstDTO } from '../dto/Itemst.dto';
import { Itemst001mb } from '../entity/Itemst001mb';
import { ItemStatusService } from '../service/item-status.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/itemstatus')
export class ItemStatusController {
    constructor(private readonly itemStatusService: ItemStatusService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.itemStatusService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.itemStatusService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() itemstDTO: ItemstDTO): Promise<Itemst001mb> {
        return this.itemStatusService.create(itemstDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() itemstDTO: ItemstDTO): Promise<Itemst001mb> {
        return this.itemStatusService.update(itemstDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Itemst001mb[]> {
        return this.itemStatusService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Itemst001mb> {
        return this.itemStatusService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.itemStatusService.remove(id);
    }
}