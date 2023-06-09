import { Body, Controller, Delete, Get, Header, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { DesignationDTO } from "../dto/Designation.dto";
import { Designation001mb } from "../entity/Designation001mb";
import { DesignationService } from "../service/designation.service";
import { Request } from "supertest";

@Controller('/testandreportstudio/api/desingtn')

export class DesignationController {

    constructor(private readonly designationService: DesignationService) { }

    @Get('pdf')
    @Header('Content-Type', 'application/pdf')
    async downloadPdf(@Req() request: Request, @Res() response: Response) {
        console.log("called->pdf");

        return await this.designationService.downloadPdf(request, response);
    }

    @Get('excel')
    @Header("Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    @Header("Content-Disposition",
        "attachment; filename=" + "Attendace Report" + ".xlsx")
    async downloadExcel(@Req() request: Request, @Res() response: Response) {

        return await this.designationService.downloadExcel(request, response);
    }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() designationDTO: DesignationDTO): Promise<Designation001mb> {
        return this.designationService.create(designationDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() designationDTO: DesignationDTO): Promise<Designation001mb> {
        return this.designationService.update(designationDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Designation001mb[]> {
        return this.designationService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(": id")
    findOne(@Param("id") id: string): Promise<Designation001mb> {
        return this.designationService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.designationService.remove(id);
    }
}