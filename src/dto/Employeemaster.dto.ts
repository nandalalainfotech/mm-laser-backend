import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "./Base.dto";
import { Employeemaster001mb } from "src/entity/Employeemaster001mb";


export class EmployeemasterDTO extends BaseDTO {

    employeeId: number;

    @IsNotEmpty()
    employeename: string | null;

    @IsNotEmpty()
    emailid: string | null;

    @IsNotEmpty()
    mobilenumber: string | null;

    @IsNotEmpty()
    status: boolean;

    setProperties(employeemaster001mb: Employeemaster001mb) {
        this.employeeId = employeemaster001mb.employeeId
        this.employeename = employeemaster001mb.employeename
        this.emailid = employeemaster001mb.emailid
        this.mobilenumber = employeemaster001mb.mobilenumber
        this.status = employeemaster001mb.status
        this.insertUser = employeemaster001mb.insertUser;
        this.insertDatetime = employeemaster001mb.insertDatetime;
        this.updatedUser = employeemaster001mb.updatedUser;
        this.updatedDatetime = employeemaster001mb.updatedDatetime;

    }
}
