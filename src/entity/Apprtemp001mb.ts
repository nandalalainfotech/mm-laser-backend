import { ApprtempDTO } from "../dto/Apprtemp.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("apprtemp001mb", { schema: "erpnextgeneration5" })
export class Apprtemp001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "apptmpId" })
  apptmpId: number;

  @Column("varchar", { name: "appraisalTemp", length: 40 })
  appraisalTemp: string;

  @Column("varchar", { name: "description", nullable: true, length: 100 })
  description: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(apprtempDTO: ApprtempDTO) {
    this.apptmpId = apprtempDTO.apptmpId;
    this.appraisalTemp = apprtempDTO.appraisalTemp;
    this.description = apprtempDTO.description;
    this.insertUser = apprtempDTO.insertUser;
    this.insertDatetime = apprtempDTO.insertDatetime;
    this.updatedUser = apprtempDTO.updatedUser;
    this.updatedDatetime = apprtempDTO.updatedDatetime;
}
}
