import { SalarystructureDTO } from "../dto/Salarystructure.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("salarystructure001hb", { schema: "erpnextgeneration5" })
export class Salarystructure001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "strId" })
  strId: number;

  @Column("varchar", { name: "empName", nullable: true, length: 30 })
  empName: string | null;

  @Column("varchar", { name: "isActive", length: 20 })
  isActive: string;

  @Column("datetime", { name: "fromDate", nullable: true })
  fromDate: Date | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(salarystructureDTO: SalarystructureDTO) {
    this.strId = salarystructureDTO.strId;
    this.empName = salarystructureDTO.empName;
    this.isActive = salarystructureDTO.isActive;
    this.fromDate = salarystructureDTO.fromDate;
    this.insertUser = salarystructureDTO.insertUser;
    this.insertDatetime = salarystructureDTO.insertDatetime;
    this.updatedUser = salarystructureDTO.updatedUser;
    this.updatedDatetime = salarystructureDTO.updatedDatetime;
}
}
