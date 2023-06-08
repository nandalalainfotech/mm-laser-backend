import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from "express";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BudgetaccounttypeDTO } from '../dto/Budgetaccounttype.dto';
import { Budgetaccounttype001mb } from '../entity/Budgetaccounttype001mb';
import { BudgetAccountService } from '../service/budget-account.service';
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/budgetaccount')

export class BudgetAccountController {

    constructor(private readonly budgetAccountService: BudgetAccountService) { }


    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        return await this.budgetAccountService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {
        return await this.budgetAccountService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() budgetaccounttypeDTO: BudgetaccounttypeDTO): Promise<Budgetaccounttype001mb> {
        return this.budgetAccountService.create(budgetaccounttypeDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() budgetaccounttypeDTO: BudgetaccounttypeDTO): Promise<Budgetaccounttype001mb> {
        return this.budgetAccountService.update(budgetaccounttypeDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Budgetaccounttype001mb[]> {
        return this.budgetAccountService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Budgetaccounttype001mb> {
        return this.budgetAccountService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.budgetAccountService.remove(id);
    }
}