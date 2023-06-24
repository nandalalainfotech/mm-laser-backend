import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Bookingentry001hb } from "./Bookingentry001hb";
import { Bookingentry001mb } from "./Bookingentry001mb";
import { Caseentry001hb } from "./Caseentry001hb";
import { Caseentry001mb } from "./Caseentry001mb";
import { DoctormasterDTO } from "src/dto/Doctormaster.dto";

@Entity("doctormaster001mb", { schema: "erpnextgeneration5" })
export class Doctormaster001mb {
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

  @Column("varchar", { name: "contactnumber", nullable: true, length: 15 })
  contactnumber: string | null;

  @Column("varchar", { name: "emailid", length: 40 })
  emailid: string;

  @Column("varchar", { name: "status", length: 50 })
  status: string;

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

  @OneToMany(
    () => Bookingentry001hb,
    (bookingentry001hb) => bookingentry001hb.dslno2
  )
  bookingentry001hbs: Bookingentry001hb[];

  @OneToMany(
    () => Bookingentry001mb,
    (bookingentry001mb) => bookingentry001mb.dslno2
  )
  bookingentry001mbs: Bookingentry001mb[];

  @OneToMany(
    () => Caseentry001hb,
    (caseentry001hb) => caseentry001hb.doctorname2
  )
  caseentry001hbs: Caseentry001hb[];

  @OneToMany(() => Caseentry001hb, (caseentry001hb) => caseentry001hb.hospname2)
  caseentry001hbs2: Caseentry001hb[];

  @OneToMany(
    () => Caseentry001mb,
    (caseentry001mb) => caseentry001mb.doctorname2
  )
  caseentry001mbs: Caseentry001mb[];

  @OneToMany(() => Caseentry001mb, (caseentry001mb) => caseentry001mb.hospname2)
  caseentry001mbs2: Caseentry001mb[];




  setProperties(doctormasterDTO: DoctormasterDTO) {
    this.slNo = doctormasterDTO.slNo;
    this.doctorname = doctormasterDTO.doctorname;
    this.addressline1 = doctormasterDTO.addressline1;
    this.addressline2 = doctormasterDTO.addressline2;
    this.city = doctormasterDTO.city;
    this.state = doctormasterDTO.state;
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

