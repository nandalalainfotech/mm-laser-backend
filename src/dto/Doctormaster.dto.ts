import { IsNotEmpty } from "class-validator";
import { Doctormaster001mb } from "src/entity/Doctormaster001mb";
import { BaseDTO } from "./Base.dto";


export class DoctormasterDTO extends BaseDTO {

    slNo: number;

    @IsNotEmpty()
    doctorname: string;

    @IsNotEmpty()
    addressline1: string;

    @IsNotEmpty()
    addressline2: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    state: string;

    @IsNotEmpty()
    hospitalname: string;

    @IsNotEmpty()
    emailid: string;

    @IsNotEmpty()
    pincode: number;

    @IsNotEmpty()
    contactnumber: string | null;

    @IsNotEmpty()
    status: string;

    setProperties(doctormaster001mb: Doctormaster001mb) {
        this.slNo = doctormaster001mb.slNo;
        this.doctorname = doctormaster001mb.doctorname;
        this.addressline1 = doctormaster001mb.addressline1;
        this.addressline2 = doctormaster001mb.addressline2;
        this.city = doctormaster001mb.city;
        this.state = doctormaster001mb.state;
        this.hospitalname = doctormaster001mb.hospitalname;
        this.emailid = doctormaster001mb.emailid;
        this.pincode = doctormaster001mb.pincode;
        this.contactnumber = doctormaster001mb.contactnumber;
        this.status = doctormaster001mb.status;
        this.insertUser = doctormaster001mb.insertUser;
        this.insertDatetime = doctormaster001mb.insertDatetime;
        this.updatedUser = doctormaster001mb.updatedUser;
        this.updatedDatetime = doctormaster001mb.updatedDatetime;
    }

}
