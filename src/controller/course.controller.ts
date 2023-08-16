import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { CourseDTO } from "src/dto/course.dto";
import { Course001mb } from "src/entity/course001mb";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CourseService } from "src/service/course.service";

@ApiBearerAuth()
@Controller('/testandreportstudio/api/course')

export class CourseController {

    constructor(private readonly courseService: CourseService) { }

    @UseGuards(JwtAuthGuard)
    @Post("save")
    create(@Body() courseDTO: CourseDTO): Promise<Course001mb> {
        console.log("courseDTO--->111", courseDTO);

        return this.courseService.create(courseDTO);
    }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    update(@Body() courseDTO: CourseDTO): Promise<Course001mb> {
        return this.courseService.update(courseDTO);
    }

    // @UseGuards(JwtAuthGuard)
    // @Get("findAll/:username")
    // findAll(@Param('username') username: any): Promise<Course001mb[]> {
    //     return this.courseService.findAll(id);
    // }

    // @UseGuards(JwtAuthGuard)
    // @Get(":id")
    // findOne(@Param("id") id: number): Promise<Course001mb> {
    //     return this.courseService.findOne();
    // }



    @UseGuards(JwtAuthGuard)
    @Get('findAll/:username')
    findAll(@Param('username') username: any): Promise<Course001mb[]> {
        return this.courseService.findAll(username);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Course001mb> {
        return this.courseService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    remove(@Param('id') id: string): Promise<void> {
        return this.courseService.remove(id);
    }
}