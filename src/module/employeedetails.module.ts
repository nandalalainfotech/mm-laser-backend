import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CourseController } from "src/controller/course.controller";
import { EmployeeDetailsController } from "src/controller/employeedetails.controller";
import { User001mb } from "src/entity/User001mb";
import { Course001mb } from "src/entity/course001mb";
import { Employeedetails001mb } from "src/entity/employeedetails001mb";
import { CourseService } from "src/service/course.service";
import { EmployeedetailsService } from "src/service/employedetails.service";



@Module({
    imports: [TypeOrmModule.forFeature([Employeedetails001mb, User001mb, Course001mb])],
    providers: [EmployeedetailsService, CourseService],
    controllers: [EmployeeDetailsController, CourseController]
})

export class EmployeeDetailsModule { }