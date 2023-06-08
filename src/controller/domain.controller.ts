import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { DomainDTO } from "../dto/Domain.dto";
import { Domain001hb } from "../entity/Domain001hb";
import { Domain001mb } from "../entity/Domain001mb";
import { DomainService } from "../service/domain.service";
var path = require('path');
const fs = require('fs');


@Controller('/testandreportstudio/api/domain')

export class DomainController {

    constructor(private readonly domainService: DomainService) { }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() domainDTO: DomainDTO): Promise<Domain001mb> {
        return this.domainService.create(domainDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() domainDTO: DomainDTO): Promise<Domain001mb> {
        return this.domainService.update(domainDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll")
    findAll(): Promise<Domain001mb[]> {
        return this.domainService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(": id")
    findOne(@Param("id") id: string): Promise<Domain001hb> {
        return this.domainService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    remove(@Param("id") id: string): Promise<void> {
        return this.domainService.remove(id);
    }
}