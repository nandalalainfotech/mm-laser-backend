import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ApplicationsettingDTO } from "../dto/Applicationsetting.dto";
import { Applicationsetting001mb } from "../entity/Applicationsetting001mb";
import { ApplicationsettingService } from "../service/applicationsetting.service";


@Controller('/testandreportstudio/api/applicationsettings')
export class ApplicationsettingController {
    constructor(private readonly applicationsettingService: ApplicationsettingService) { }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() applicationsettingDTO: ApplicationsettingDTO[]): Promise<Applicationsetting001mb[]> {
        // console.log("appsettingDTO",appsettingDTO);
        return this.applicationsettingService.create(applicationsettingDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() ApplicationsettingDTO: ApplicationsettingDTO): Promise<Applicationsetting001mb> {
        return this.applicationsettingService.update(ApplicationsettingDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get('findAll')
    findAll(): Promise<Applicationsetting001mb[]> {
        return this.applicationsettingService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Applicationsetting001mb> {
        return this.applicationsettingService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.applicationsettingService.remove(id);
    }
}
