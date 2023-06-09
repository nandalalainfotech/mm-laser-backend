import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PurecpttrendDTO } from "../dto/Purecpttrend.dto";
import { Purecpttrend001mb } from "../entity/Purecpttrend001mb";
import { PurRecptTrendService } from "../service/pur-recpt-trend.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/recpttrend')

export class PurRecptTrendController {

    constructor(private readonly purRecptTrendService: PurRecptTrendService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.purRecptTrendService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.purRecptTrendService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() purecpttrendDTO: PurecpttrendDTO): Promise<Purecpttrend001mb> {
        return this.purRecptTrendService.create(purecpttrendDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() purecpttrendDTO: PurecpttrendDTO): Promise<Purecpttrend001mb> {
        return this.purRecptTrendService.update(purecpttrendDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Purecpttrend001mb[]> {
        return this.purRecptTrendService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(": id")
    findOne(@Param("id") id: string): Promise<Purecpttrend001mb> {
        return this.purRecptTrendService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: number): Promise<void> {
        return this.purRecptTrendService.remove(id);
    }
}