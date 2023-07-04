import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { EmployeemasterDTO } from 'src/dto/Employeemaster.dto';
import { Employeemaster001mb } from 'src/entity/Employeemaster001mb';
import { EmployeemasterService } from 'src/service/employeemaster.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/employeemaster')
export class EmployeemasterController {
    constructor(private readonly employeemasterService: EmployeemasterService) { }


    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() employeemasterDTO: EmployeemasterDTO): Promise<Employeemaster001mb> {
        return this.employeemasterService.create(employeemasterDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() employeemasterDTO: EmployeemasterDTO): Promise<Employeemaster001mb> {
        return this.employeemasterService.update(employeemasterDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll/:username')
    findAll(@Param('username') username: any): Promise<Employeemaster001mb[]> {
        return this.employeemasterService.findAll(username);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Employeemaster001mb> {
        return this.employeemasterService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.employeemasterService.remove(id);
    }
}
