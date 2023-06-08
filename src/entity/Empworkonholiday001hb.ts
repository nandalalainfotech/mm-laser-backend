import { EmpworkonholidayDTO } from "../dto/Empworkonholiday.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("empworkonholiday001hb", { schema: "erpnextgeneration5" })
export class Empworkonholiday001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "empwhId" })
  empwhId: number;

  @Column("varchar", { name: "empName", nullable: true, length: 255 })
  empName: string | null;

  @Column("varchar", { name: "empNumber", nullable: true, length: 255 })
  empNumber: string | null;

  @Column("varchar", { name: "empStatus", nullable: true, length: 255 })
  empStatus: string | null;

  @Column("varchar", { name: "holiday", nullable: true, length: 255 })
  holiday: string | null;

  @Column("varchar", { name: "holidayList", nullable: true, length: 255 })
  holidayList: string | null;

  @Column("datetime", { name: "fromDate", nullable: true })
  fromDate: Date | null;

  @Column("datetime", { name: "toDate", nullable: true })
  toDate: Date | null;

  @Column("datetime", { name: "whDate", nullable: true })
  whDate: Date | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(empworkonholidayDTO: EmpworkonholidayDTO) {
    this.empwhId = empworkonholidayDTO.empwhId;
    this.empName = empworkonholidayDTO.empName;
    this.empNumber = empworkonholidayDTO.empNumber;
    this.empStatus = empworkonholidayDTO.empStatus;
    this.fromDate = empworkonholidayDTO.fromDate;
    this.holiday = empworkonholidayDTO.holiday;
    this.holidayList = empworkonholidayDTO.holidayList;
    this.toDate = empworkonholidayDTO.toDate;
    this.whDate = empworkonholidayDTO.whDate;
    this.insertUser = empworkonholidayDTO.insertUser;
    this.insertDatetime = empworkonholidayDTO.insertDatetime;
    this.updatedUser = empworkonholidayDTO.updatedUser;
    this.updatedDatetime = empworkonholidayDTO.updatedDatetime;
}
}
