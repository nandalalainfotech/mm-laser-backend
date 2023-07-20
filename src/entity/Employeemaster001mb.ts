import { EmployeemasterDTO } from "src/dto/Employeemaster.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("employeemaster001mb", { schema: "mmlaser" })
export class Employeemaster001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "employeeId" })
  employeeId: number;

  @Column("varchar", { name: "employeename", nullable: true, length: 45 })
  employeename: string | null;

  @Column("varchar", { name: "emailid", nullable: true, length: 45 })
  emailid: string | null;

  @Column("varchar", { name: "mobilenumber", nullable: true, length: 15 })
  mobilenumber: string | null;

  @Column("tinyint", { name: "status", width: 1 })
  status: boolean;

  @Column("varchar", { name: "insert_user", nullable: true, length: 40 })
  insertUser: string | null;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

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