import { IsNotEmpty } from "class-validator";
import { Departments001mb } from "../entity/Departments001mb";
import { BaseDTO } from "./Base.dto";

export class DepartmentsDTO extends BaseDTO {
    slNo: number;

    @IsNotEmpty()
    departmentname: string | null;

    @IsNotEmpty()
    departmentdescription: string | null;

    @IsNotEmpty()
    domainslno: number | null;


    setProperties(departments001mb:Departments001mb) {
        this.slNo = departments001mb.slNo;
        this.departmentname = departments001mb.departmentname;
        this.departmentdescription = departments001mb.departmentdescription;
        this.domainslno = departments001mb.domainslno;
        this.insertUser = departments001mb.insertUser;
        this.insertDatetime = departments001mb.insertDatetime;
        this.updatedUser = departments001mb.updatedUser;
        this.updatedDatetime = departments001mb.updatedDatetime;
    }
}
