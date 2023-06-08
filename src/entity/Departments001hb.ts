import { DepartmentsDTO } from "../dto/Departments.dto";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Domain001mb } from "./Domain001mb";

@Index("domainslno", ["domainslno"], {})
@Entity("departments001hb", { schema: "erpnextgeneration5" })
export class Departments001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "sl_no" })
  slNo: number;

  @Column("varchar", { name: "departmentname", nullable: true, length: 255 })
  departmentname: string | null;

  @Column("varchar", {
    name: "departmentdescription",
    nullable: true,
    length: 255,
  })
  departmentdescription: string | null;

  @Column("varchar", { name: "domain", nullable: true, length: 255 })
  domain: string | null;

  @Column("int", { name: "domainslno", nullable: true })
  domainslno: number | null;

  @Column("varchar", { name: "insert_user", nullable: true, length: 40 })
  insertUser: string | null;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @ManyToOne(
    () => Domain001mb,
    (domain001mb) => domain001mb.departments001hbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "domainslno", referencedColumnName: "domainId" }])
  domainslno2: Domain001mb;

  setProperties(departmentsDTO: DepartmentsDTO) {
    this.slNo = departmentsDTO.slNo;
    this.departmentname = departmentsDTO.departmentname;
    this.departmentdescription = departmentsDTO.departmentdescription;
    this.domainslno = departmentsDTO.domainslno;
    this.insertUser = departmentsDTO.insertUser;
    this.insertDatetime = departmentsDTO.insertDatetime;
    this.updatedUser = departmentsDTO.updatedUser;
    this.updatedDatetime = departmentsDTO.updatedDatetime;
}
}
