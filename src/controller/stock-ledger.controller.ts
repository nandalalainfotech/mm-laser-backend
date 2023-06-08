import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { StkrepledgerDTO } from "../dto/Stkrepledger.dto";
import { Stkrepledger001mb } from "../entity/Stkrepledger001mb";
import { StockLedgerService } from "../service/stock-ledger.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/stkledger')
export class StockLedgerController {
    constructor(private readonly stockLedgerService: StockLedgerService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.stockLedgerService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.stockLedgerService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() stkrepledgerDTO: StkrepledgerDTO): Promise<Stkrepledger001mb> {
        return this.stockLedgerService.create(stkrepledgerDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() stkrepledgerDTO: StkrepledgerDTO): Promise<Stkrepledger001mb> {
        return this.stockLedgerService.update(stkrepledgerDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Stkrepledger001mb[]> {
        return this.stockLedgerService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Stkrepledger001mb> {
        return this.stockLedgerService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.stockLedgerService.remove(id);
    }
}