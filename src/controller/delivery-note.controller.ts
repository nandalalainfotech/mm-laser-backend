import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { StktransdeliverDTO } from "../dto/Stktransdeliver.dto";
import { Stktransdeliver001mb } from "../entity/Stktransdeliver001mb";
import { DeliveryNoteService } from "../service/delivery-note.service";
import { Request } from "supertest";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/delnote')

export class DeliveryNoteController {

    constructor(private readonly deliveryNoteService: DeliveryNoteService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.deliveryNoteService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.deliveryNoteService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() stktransdeliverDTO: StktransdeliverDTO): Promise<Stktransdeliver001mb> {
        return this.deliveryNoteService.create(stktransdeliverDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() stktransdeliverDTO: StktransdeliverDTO): Promise<Stktransdeliver001mb> {
        return this.deliveryNoteService.update(stktransdeliverDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Stktransdeliver001mb[]> {
        return this.deliveryNoteService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(": id")
    findOne(@Param("id") id: string): Promise<Stktransdeliver001mb> {
        return this.deliveryNoteService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.deliveryNoteService.remove(id);
    }
}