import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CustomerdetailsDTO } from "../dto/Customerdetails.dto";
import { Customerdetails001mb } from "../entity/Customerdetails001mb";
import { CustomerService } from "../service/customer.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Get('pdf')
	@Header('Content-Type', 'application/pdf')
	async downloadPdf(@Req() request: Request, @Res() response: Response) {
		return await this.customerService.downloadPdf(request, response);
	}

	@Get('excel')
	@Header("Content-Type",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	@Header("Content-Disposition",
		"attachment; filename=" + "Attendace Report" + ".xlsx")
	async downloadExcel(@Req() request: Request, @Res() response: Response) {
		return await this.customerService.downloadExcel(request, response);
	}


    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() customerdetailsDTO: CustomerdetailsDTO): Promise<Customerdetails001mb> {
        return this.customerService.create(customerdetailsDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() customerdetailsDTO: CustomerdetailsDTO): Promise<Customerdetails001mb> {
        return this.customerService.update(customerdetailsDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Customerdetails001mb[]> {
        return this.customerService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Customerdetails001mb> {
        return this.customerService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.customerService.remove(id);
    }
}
