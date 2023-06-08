import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RequestitembuyDTO } from '../dto/Requestitembuy.dto';
import { Requestitembuy001mb } from '../entity/Requestitembuy001mb';
import { ItemRequestService } from '../service/item-request.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/itemrequest')
export class ItemRequestController {
    constructor(private readonly itemRequestService: ItemRequestService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.itemRequestService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.itemRequestService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() requestitembuyDTO: RequestitembuyDTO): Promise<Requestitembuy001mb> {
        return this.itemRequestService.create(requestitembuyDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() requestitembuyDTO: RequestitembuyDTO): Promise<Requestitembuy001mb> {
        return this.itemRequestService.update(requestitembuyDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Requestitembuy001mb[]> {
        return this.itemRequestService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Requestitembuy001mb> {
        return this.itemRequestService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.itemRequestService.remove(id);
    }
}