import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BudgetmonthdistDTO } from '../dto/Budgetmonthdist.dto';
import { Budgetmonthdist001mb } from '../entity/Budgetmonthdist001mb';
import { BudgetMonthDistService } from '../service/budget-monthdist.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/budgetmonthdist')

export class BudgetMonthDistControllers {

    constructor(private readonly budgetMonthDistService: BudgetMonthDistService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.budgetMonthDistService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.budgetMonthDistService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() budgetmonthdistDTO: BudgetmonthdistDTO): Promise<Budgetmonthdist001mb> {
        return this.budgetMonthDistService.create(budgetmonthdistDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() budgetmonthdistDTO: BudgetmonthdistDTO): Promise<Budgetmonthdist001mb> {
        return this.budgetMonthDistService.update(budgetmonthdistDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Budgetmonthdist001mb[]> {
        return this.budgetMonthDistService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Budgetmonthdist001mb> {
        return this.budgetMonthDistService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.budgetMonthDistService.remove(id);
    }
}