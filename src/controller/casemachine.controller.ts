import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CasemachineDTO } from "src/dto/Casemachine.dto";
import { Casemachine001wb } from "src/entity/Casemachine001wb";
import { CasemachineService } from "src/service/casemachine.service";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth } from "@nestjs/swagger";
var path = require('path');
const fs = require('fs');


@ApiBearerAuth()
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
    @Get('findAll/:username')
    findAll(@Param('username') username: string): Promise<CasemachineDTO[]> {
        return this.casemachineService.findAll(username);
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