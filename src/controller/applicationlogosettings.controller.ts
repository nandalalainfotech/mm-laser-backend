import { Body, Controller, Get, Param, Post, Req, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from "express";
import { createReadStream } from "fs";
import { ApplicationlogosettingsDTO } from "../dto/applicationlogosettings.dto";
import { Applicationlogosettings001mb } from "../entity/Applicationlogosettings001mb";
import { ApplicationlogoSettingsservice } from "../service/applicationlogosettings.service";
import { Request } from "supertest";
import { ApiBearerAuth } from "@nestjs/swagger";
var path = require('path');
const fs = require('fs')

@ApiBearerAuth()
@Controller('/testandreportstudio/api/appsettings')

export class ApplicationlogoSettingscontroller {
    constructor(private readonly applicationlogoSettingsService: ApplicationlogoSettingsservice) { }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File, @Body() applicationlogoSettingsDTO: ApplicationlogosettingsDTO) {
        return this.applicationlogoSettingsService.create(file, applicationlogoSettingsDTO);
    }

    @Get('findAll')
    findAll(): Promise<Applicationlogosettings001mb> {
        return this.applicationlogoSettingsService.findOne();
    }

    @Get('download/:originalfilename')
    download(@Param() originalfilename: any, @Req() request: Request, @Res() response: Response) {
        var filePath = path.join(`./uploads/`) + originalfilename.originalfilename;
        const filestream = createReadStream(filePath);
        filestream.pipe(response);
    }
}