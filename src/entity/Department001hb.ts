import { DepartmentDTO } from "../dto/Department.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("department001hb", { schema: "erpnextgeneration5" })
export class Department001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "deptid" })
  deptid: number;

  @Column("varchar", { name: "deptName", nullable: true, length: 255 })
  deptName: string | null;

  @Column("varchar", { name: "insert_user", nullable: true, length: 40 })
  insertUser: string | null;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  
  setProperties(departmentDTO: DepartmentDTO) {
    this.deptid = departmentDTO.deptid;
    this.deptName = departmentDTO.deptName;
    this.insertUser = departmentDTO.insertUser;
    this.insertDatetime = departmentDTO.insertDatetime;
    this.updatedUser = departmentDTO.updatedUser;
    this.updatedDatetime = departmentDTO.updatedDatetime;
}
}
