import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { DoctormasterDTO } from "src/dto/Doctormaster.dto";
import { Doctormaster001mb } from "src/entity/Doctormaster001mb";
import { DoctormasterService } from "src/service/doctormaster.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('/testandreportstudio/api/doctormaster')

export class DoctormasterController {

    constructor(private readonly doctormasterService: DoctormasterService) { }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() doctormasterDTO: DoctormasterDTO): Promise<Doctormaster001mb> {

        return this.doctormasterService.create(doctormasterDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() doctormasterDTO: DoctormasterDTO): Promise<Doctormaster001mb> {
        return this.doctormasterService.update(doctormasterDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll/:username")
    findAll(@Param('username') username: any): Promise<Doctormaster001mb[]> {
        return this.doctormasterService.findAll(username);
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: number): Promise<Doctormaster001mb> {
        return this.doctormasterService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: number): Promise<void> {
        return this.doctormasterService.remove(id);
    }
}