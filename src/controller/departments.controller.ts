import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { DepartmentsDTO } from "../dto/Departments.dto";
import { Departments001mb } from "../entity/Departments001mb";
import { DepartmentsService } from "../service/departments.service";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/departments')
export class DepartmentsController {
    constructor(private readonly departmentsService: DepartmentsService) { }


    // @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() departmentsDTO: DepartmentsDTO): Promise<Departments001mb> {
        console.log("departmentsDTO", departmentsDTO);
        return this.departmentsService.create(departmentsDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() departmentsDTO: DepartmentsDTO): Promise<Departments001mb> {
        return this.departmentsService.update(departmentsDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Departments001mb[]> {
        return this.departmentsService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Departments001mb> {
        return this.departmentsService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.departmentsService.remove(id);
    }
}