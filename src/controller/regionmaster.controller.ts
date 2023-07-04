import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { RegionmasterDTO } from "src/dto/Regionmaster.dto";
import { Regionmaster001mb } from "src/entity/Regionmaster001mb";
import { RegionmasterService } from "src/service/regionmaster.service";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/regionmaster')
export class RegionmasterController {
    constructor(private readonly regionmasterService: RegionmasterService) { }

    @Post("save")
    create(@Body() regionmasterDTO: RegionmasterDTO): Promise<Regionmaster001mb> {
        return this.regionmasterService.create(regionmasterDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() regionmasterDTO: RegionmasterDTO): Promise<Regionmaster001mb> {
        return this.regionmasterService.update(regionmasterDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll/:username')
    findAll(@Param('username') username: any): Promise<RegionmasterDTO[]> {
        return this.regionmasterService.findAll(username);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<RegionmasterDTO> {
        return this.regionmasterService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.regionmasterService.remove(id);
    }
}