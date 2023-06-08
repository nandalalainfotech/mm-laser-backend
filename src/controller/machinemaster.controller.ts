import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { MachinemasterService } from "src/service/machinemaster.service";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Machinemaster001mb } from "src/entity/Machinemaster001mb";
import { MachinemasterDTO } from "src/dto/Machinemaster.dto";
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/machinemaster')
export class MachinemasterController {
    constructor(private readonly machinemasterService: MachinemasterService) { }


    // @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() machinemasterDTO: MachinemasterDTO): Promise<Machinemaster001mb> {
        console.log("machinemasterDTO", machinemasterDTO);
        return this.machinemasterService.create(machinemasterDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() machinemasterDTO: MachinemasterDTO): Promise<Machinemaster001mb> {
        return this.machinemasterService.update(machinemasterDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<MachinemasterDTO[]> {
        return this.machinemasterService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<MachinemasterDTO> {
        return this.machinemasterService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.machinemasterService.remove(id);
    }
}