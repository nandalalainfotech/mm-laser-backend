import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CourseController } from "src/controller/course.controller";
import { User001mb } from "src/entity/User001mb";
import { Course001mb } from "src/entity/course001mb";
import { CourseService } from "src/service/course.service";



@Module({
    imports: [TypeOrmModule.forFeature([Course001mb, User001mb])],
    providers: [CourseService],
    controllers: [CourseController]
})

export class CourseModule { }