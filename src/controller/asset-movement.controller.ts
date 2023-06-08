import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AssetmovementDTO } from '../dto/Assetmovement.dto';
import { Assetmovement001mb } from '../entity/Assetmovement001mb';
import { AssetMovementService } from '../service/asset-movement.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/assetmove')
export class AssetMovementController {
    constructor(private readonly assetMovementService: AssetMovementService) { }


    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.assetMovementService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.assetMovementService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() assetmovementDTO: AssetmovementDTO): Promise<Assetmovement001mb> {
        return this.assetMovementService.create(assetmovementDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() assetmovementDTO: AssetmovementDTO): Promise<Assetmovement001mb> {
        return this.assetMovementService.update(assetmovementDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Assetmovement001mb[]> {
        return this.assetMovementService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Assetmovement001mb> {
        return this.assetMovementService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.assetMovementService.remove(id);
    }
}
