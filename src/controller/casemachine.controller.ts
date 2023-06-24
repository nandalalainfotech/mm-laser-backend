import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CasemachineDTO } from "src/dto/Casemachine.dto";
import { Casemachine001wb } from "src/entity/Casemachine001wb";
import { CasemachineService } from "src/service/casemachine.service";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/casemachine')
export class CaseMachineController {
    constructor(private readonly casemachineService: CasemachineService) { }


    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() casemachineDTO: CasemachineDTO): Promise<Casemachine001wb> {
        console.log("bookingentryDTO", CasemachineDTO);
        return this.casemachineService.create(casemachineDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() casemachineDTO: CasemachineDTO): Promise<Casemachine001wb> {
        return this.casemachineService.update(casemachineDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<CasemachineDTO[]> {
        return this.casemachineService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<CasemachineDTO> {
        return this.casemachineService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.casemachineService.remove(id);
    }
}