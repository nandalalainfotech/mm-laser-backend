import { PayrollDTO } from "../dto/Payroll.dto";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("sNo", ["sNo"], {})
@Entity("payroll001hb", { schema: "erpnextgeneration5" })
export class Payroll001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "prId" })
  prId: number;

  @Column("int", { name: "sNo", nullable: true })
  sNo: number | null;

  @Column("varchar", { name: "status", length: 30 })
  status: string;

  @Column("varchar", { name: "salarySlip", length: 50 })
  salarySlip: string;

  @Column("varchar", { name: "empName", nullable: true, length: 255 })
  empName: string | null;

  @Column("year", { name: "fiscalYear" })
  fiscalYear: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(payrollDTO: PayrollDTO) {
    this.prId = payrollDTO.prId;
    this.sNo = payrollDTO.sNo;
    this.status = payrollDTO.status;
    this.fiscalYear = payrollDTO.fiscalYear;
    this.salarySlip = payrollDTO.salarySlip;
    this.empName = payrollDTO.empName;
    this.insertUser = payrollDTO.insertUser;
    this.insertDatetime = payrollDTO.insertDatetime;
    this.updatedUser = payrollDTO.updatedUser;
    this.updatedDatetime = payrollDTO.updatedDatetime;
}
}
