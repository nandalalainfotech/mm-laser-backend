import { ProjectDTO } from "../dto/Project.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("project001hb", { schema: "erpnextgeneration5" })
export class Project001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "projectname", length: 30 })
  projectname: string;

  @Column("int", { name: "estimatedcost" })
  estimatedcost: number;

  @Column("varchar", { name: "status", length: 30 })
  status: string;

  @Column("datetime", { name: "enddate" })
  enddate: Date;

  @Column("datetime", { name: "startdate" })
  startdate: Date;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(projectDTO: ProjectDTO) {
    this.id = projectDTO.id;
    this.projectname = projectDTO.projectname;
    this.estimatedcost = projectDTO.estimatedcost;
    this.enddate = projectDTO.enddate;
    this.startdate = projectDTO.startdate;
    this.status = projectDTO.status;
    this.insertUser = projectDTO.insertUser;
    this.insertDatetime = projectDTO.insertDatetime;
    this.updatedUser = projectDTO.updatedUser;
    this.updatedDatetime = projectDTO.updatedDatetime;
}
}
