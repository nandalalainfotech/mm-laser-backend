import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LoginDTO } from '../dto/Login.dto';
import { Login001mb } from '../entity/Login001mb';
import { LoginService } from '../service/login.service';
var path = require('path');
const fs = require('fs');

@Controller('/testandreportstudio/api/login')
export class LoginController {
    constructor(private readonly loginService: LoginService) { }

    // @Get('pdf')
    // @Header('Content-Type', 'application/pdf')
    // async downloadPdf(@Req() request: Request, @Res() response: Response) {
    //     return await this.loginService.downloadPdf(request, response);
    // }

    // @Get('excel')
    // @Header("Content-Type",
    //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    // @Header("Content-Disposition",
    //     "attachment; filename=" + "Attendace Report" + ".xlsx")
    // async downloadExcel(@Req() request: Request, @Res() response: Response) {
    //     return await this.loginService.downloadExcel(request, response);
    // }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() loginDTO: LoginDTO): Promise<Login001mb> {
        return this.loginService.create(loginDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() loginDTO: LoginDTO): Promise<Login001mb> {
        return this.loginService.update(loginDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Login001mb[]> {
        return this.loginService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Login001mb> {
        return this.loginService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.loginService.remove(id);
    }
}