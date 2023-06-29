import { DoctormasterDTO } from "src/dto/Doctormaster.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("doctormaster001hb", { schema: "erpnextgeneration5" })
export class Doctormaster001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "sl_no" })
  slNo: number;

  @Column("varchar", { name: "doctorname", length: 40 })
  doctorname: string;

  @Column("varchar", { name: "addressline1", length: 40 })
  addressline1: string;

  @Column("varchar", { name: "addressline2", length: 30 })
  addressline2: string;

  @Column("varchar", { name: "city", length: 40 })
  city: string;

  @Column("varchar", { name: "state", length: 50 })
  state: string;

  @Column("varchar", { name: "region", nullable: true, length: 255 })
  region: string | null;

  @Column("varchar", { name: "contactnumber", nullable: true, length: 15 })
  contactnumber: string | null;

  @Column("varchar", { name: "emailid", length: 40 })
  emailid: string;

  @Column("tinyint", { name: "status", width: 1 })
  status: boolean;

  @Column("varchar", { name: "hospitalname", length: 40 })
  hospitalname: string;

  @Column("int", { name: "pincode" })
  pincode: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;


  setProperties(doctormasterDTO: DoctormasterDTO) {
    this.slNo = doctormasterDTO.slNo;
    this.doctorname = doctormasterDTO.doctorname;
    this.addressline1 = doctormasterDTO.addressline1;
    this.addressline2 = doctormasterDTO.addressline2;
    this.city = doctormasterDTO.city;
    this.state = doctormasterDTO.state;
    this.region = doctormasterDTO.region;
    this.hospitalname = doctormasterDTO.hospitalname;
    this.emailid = doctormasterDTO.emailid;
    this.pincode = doctormasterDTO.pincode;
    this.contactnumber = doctormasterDTO.contactnumber;
    this.status = doctormasterDTO.status;
    this.insertUser = doctormasterDTO.insertUser;
    this.insertDatetime = doctormasterDTO.insertDatetime;
    this.updatedUser = doctormasterDTO.updatedUser;
    this.updatedDatetime = doctormasterDTO.updatedDatetime;
  }
}
