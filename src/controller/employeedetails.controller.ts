import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { DoctormasterDTO } from "src/dto/Doctormaster.dto";
import { Doctormaster001mb } from "src/entity/Doctormaster001mb";
import { DoctormasterService } from "src/service/doctormaster.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ApiBearerAuth } from "@nestjs/swagger";
import { Employeedetails001mb } from "src/entity/employeedetails001mb";
import { EmployeedetailsDTO } from "src/dto/employeedetails.dto";
import { EmployeedetailsService } from "src/service/employedetails.service";

@ApiBearerAuth()
@Controller('/testandreportstudio/api/employeedetails')

export class EmployeeDetailsController {

    constructor(private readonly employeeService: EmployeedetailsService) { }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() employeedetailsDTO: EmployeedetailsDTO): Promise<Employeedetails001mb> {
        console.log("employeedetailsDTO-->", employeedetailsDTO);

        return this.employeeService.create(employeedetailsDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() employeedetailsDTO: EmployeedetailsDTO): Promise<Employeedetails001mb> {
        return this.employeeService.update(employeedetailsDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Get("findAll/:username")
    findAll(@Param('username') username: any): Promise<Employeedetails001mb[]> {
        return this.employeeService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    findOne(@Param("id") id: number): Promise<Employeedetails001mb> {
        return this.employeeService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.employeeService.remove(id);
    }
}