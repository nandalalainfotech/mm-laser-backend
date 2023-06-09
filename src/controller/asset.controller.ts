import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { AssetDTO } from "../dto/Asset.dto";
import { Asset001mb } from "../entity/Asset001mb";
import { AssetService } from "../service/asset.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/asset')
export class AssetController {
    constructor(private readonly assetService: AssetService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.assetService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.assetService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() assetDTO: AssetDTO): Promise<Asset001mb> {
        return this.assetService.create(assetDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() assetDTO: AssetDTO): Promise<Asset001mb> {
        return this.assetService.update(assetDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Asset001mb[]> {
        return this.assetService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Asset001mb> {
        return this.assetService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.assetService.remove(id);
    }
}
