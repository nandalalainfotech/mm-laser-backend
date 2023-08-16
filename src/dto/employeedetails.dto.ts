import { IsNotEmpty } from "class-validator";
import { Doctormaster001mb } from "src/entity/Doctormaster001mb";
import { BaseDTO } from "./Base.dto";
import { Employeedetails001mb } from "src/entity/employeedetails001mb";


export class EmployeedetailsDTO extends BaseDTO {
    employeeId: number;

    slNo: number;

    @IsNotEmpty()
   employeename: string;

    @IsNotEmpty()
    addressline1: string;

    @IsNotEmpty()
    addressline2: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    state: string;

    // @IsNotEmpty()
    // coursename: string;

    @IsNotEmpty()
    companyname: string;

    @IsNotEmpty()
    emailid: string;

    @IsNotEmpty()
    pincode: number;

    @IsNotEmpty()
    contactnumber: string | null;

    @IsNotEmpty()
    status: boolean;


    // uuid: number;


    setProperties(employeedetails001mb: Employeedetails001mb) {
        this.employeeId = employeedetails001mb.employeeId;
        this.slNo = employeedetails001mb.slNo;
        this.employeename = employeedetails001mb.employeename;
        this.addressline1 = employeedetails001mb.addressline1;
        this.addressline2 = employeedetails001mb.addressline2;
        this.city = employeedetails001mb.city;
        this.state = employeedetails001mb.state;
        // this.uuid = employeedetails001mb.uuid;
        this.companyname = employeedetails001mb.companyname;
        this.emailid = employeedetails001mb.emailid;
        // this.coursename = employeedetails001mb.coursename;
        this.pincode = employeedetails001mb.pincode;
        this.contactnumber = employeedetails001mb.contactnumber;
        this.status = employeedetails001mb.status;
        this.insertUser = employeedetails001mb.insertUser;
        this.insertDatetime = employeedetails001mb.insertDatetime;
        this.updatedUser = employeedetails001mb.updatedUser;
        this.updatedDatetime = employeedetails001mb.updatedDatetime;
    }

}
