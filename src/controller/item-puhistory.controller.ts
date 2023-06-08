import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ItempuhistDTO } from '../dto/Itempuhist.dto';
import { Itempuhist001mb } from '../entity/Itempuhist001mb';
import { ItemPuhistoryService } from '../service/item-puhistory.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/itempuhistory')
export class ItemPuhistoryController {
    constructor(private readonly itemPuhistoryService: ItemPuhistoryService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.itemPuhistoryService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.itemPuhistoryService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() itempuhistDTO: ItempuhistDTO): Promise<Itempuhist001mb> {
        return this.itemPuhistoryService.create(itempuhistDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() itempuhistDTO: ItempuhistDTO): Promise<Itempuhist001mb> {
        return this.itemPuhistoryService.update(itempuhistDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Itempuhist001mb[]> {
        return this.itemPuhistoryService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Itempuhist001mb> {
        return this.itemPuhistoryService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.itemPuhistoryService.remove(id);
    }
}