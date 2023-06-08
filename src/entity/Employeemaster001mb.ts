import { BaseDTO } from "src/dto/Base.dto";
import { EmployeemasterDTO } from "src/dto/Employeemaster.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("employeemaster001mb", { schema: "erpnextgeneration5" })
export class Employeemaster001mb extends BaseDTO {
  @PrimaryGeneratedColumn({ type: "int", name: "employeeId" })
  employeeId: number;

  @Column("varchar", { name: "employeename", nullable: true, length: 45 })
  employeename: string | null;

  @Column("varchar", { name: "emailid", nullable: true, length: 45 })
  emailid: string | null;

  @Column("varchar", { name: "mobilenumber", nullable: true, length: 15 })
  mobilenumber: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 255 })
  status: string | null;

  setProperties(employeemasterDTO: EmployeemasterDTO) {
    this.employeeId = employeemasterDTO.employeeId
    this.employeename = employeemasterDTO.employeename
    this.emailid = employeemasterDTO.emailid
    this.mobilenumber = employeemasterDTO.mobilenumber
    this.status = employeemasterDTO.status
    this.insertUser = employeemasterDTO.insertUser;
    this.insertDatetime = employeemasterDTO.insertDatetime;
    this.updatedUser = employeemasterDTO.updatedUser;
    this.updatedDatetime = employeemasterDTO.updatedDatetime;

  }
}