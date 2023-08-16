import { IsNotEmpty } from "class-validator";
import { Regionmaster001mb } from "src/entity/Regionmaster001mb";
import { BaseDTO } from "./Base.dto";
import { Course001mb } from "src/entity/course001mb";

export class CourseDTO extends BaseDTO {
    slNo: number;

    @IsNotEmpty()
    coursename: string | null;

    @IsNotEmpty()
    validity: string | null;

    @IsNotEmpty()
    status: boolean;

    setProperties(course001mb: Course001mb) {
        this.slNo = course001mb.slNo;
        this.coursename = course001mb.coursename;
        this.validity = course001mb.validity;
        this.insertUser = course001mb.insertUser;
        this.insertDatetime = course001mb.insertDatetime;
        this.updatedUser = course001mb.updatedUser;
        this.updatedDatetime = course001mb.updatedDatetime;
    }
}
