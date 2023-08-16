import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Course001mb } from "./course001mb";
import { EmployeedetailsDTO } from "src/dto/employeedetails.dto";

@Index("slNo", ["slNo"], {})
@Entity("employeedetails001mb", { schema: "mmlaser" })
export class Employeedetails001mb {
    @PrimaryGeneratedColumn({ type: "int", name: "employeeId" })
    employeeId: number;

    @Column("int", { name: "slNo" })
    slNo: number;

    @Column("varchar", { name: "employeename", length: 40 })
    employeename: string;

    @Column("varchar", { name: "addressline1", length: 40 })
    addressline1: string;

    @Column("varchar", { name: "addressline2", length: 30 })
    addressline2: string;

    @Column("varchar", { name: "city", length: 40 })
    city: string;

    @Column("varchar", { name: "state", length: 50 })
    state: string;

    // @Column("varchar", { name: "coursename", length: 20 })
    // coursename: string;

    @Column("varchar", { name: "contactnumber", nullable: true, length: 15 })
    contactnumber: string | null;

    @Column("varchar", { name: "emailid", length: 40 })
    emailid: string;

    @Column("tinyint", { name: "status", width: 1 })
    status: boolean;

    @Column("varchar", { name: "companyname", length: 40 })
    companyname: string;

    @Column("int", { name: "pincode" })
    pincode: number;
    
    // @Column("int", { name: "uuid" })
    // uuid: number;

    @Column("varchar", { name: "insert_user", length: 40 })
    insertUser: string;

    @Column("datetime", { name: "insert_datetime" })
    insertDatetime: Date;

    @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
    updatedUser: string | null;

    @Column("datetime", { name: "updated_datetime", nullable: true })
    updatedDatetime: Date | null;

    @ManyToOne(
        () => Course001mb,
        (course001mb) => course001mb.employeedetails001mbs,
        { onDelete: "CASCADE", onUpdate: "RESTRICT" }
    )
    @JoinColumn([{ name: "slNo", referencedColumnName: "slNo" }])
    slNo2: Course001mb;
    employeedetails001mbs: Course001mb[];

    setProperties(employeedetailsDTO: EmployeedetailsDTO) {
        this.slNo = employeedetailsDTO.slNo;
        this.employeeId = employeedetailsDTO.employeeId;
        this.employeename = employeedetailsDTO.employeename;
        this.addressline1 = employeedetailsDTO.addressline1;
        this.addressline2 = employeedetailsDTO.addressline2;
        this.city = employeedetailsDTO.city;
        this.state = employeedetailsDTO.state;
        // this.coursename = employeedetailsDTO.coursename;
        this.companyname = employeedetailsDTO.companyname;
        this.emailid = employeedetailsDTO.emailid;
        // this.uuid = employeedetailsDTO.uuid;
        this.pincode = employeedetailsDTO.pincode;
        this.contactnumber = employeedetailsDTO.contactnumber;
        this.status = employeedetailsDTO.status;
        this.insertUser = employeedetailsDTO.insertUser;
        this.insertDatetime = employeedetailsDTO.insertDatetime;
        this.updatedUser = employeedetailsDTO.updatedUser;
        this.updatedDatetime = employeedetailsDTO.updatedDatetime;
    }
}
