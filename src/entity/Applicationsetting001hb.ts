import { ApplicationsettingDTO } from "../dto/Applicationsetting.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("applicationsetting001hb", { schema: "erpnextgeneration4" })
export class Applicationsetting001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "app_id" })
  appId: number;

  @Column("varchar", { name: "property", nullable: true, length: 250 })
  property: string | null;

  @Column("varchar", { name: "link", nullable: true, length: 250 })
  link: string | null;

  @Column("varchar", { name: "login_user", nullable: true, length: 50 })
  loginUser: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 50 })
  status: string | null;

  @Column("varchar", { name: "insert_user", nullable: true, length: 50 })
  insertUser: string | null;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 50 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;
  
  setProperties(applicationsettingDTO: ApplicationsettingDTO) {
    this.appId = applicationsettingDTO.appId;
    this.property = applicationsettingDTO.property;
    this.link = applicationsettingDTO.link;
    this.loginUser = applicationsettingDTO.loginUser;
    this.status = applicationsettingDTO.status;
    this.insertUser = applicationsettingDTO.insertUser;
    this.insertDatetime = applicationsettingDTO.insertDatetime;
    this.updatedUser = applicationsettingDTO.updatedUser;
    this.updatedDatetime = applicationsettingDTO.updatedDatetime;
    }
}
