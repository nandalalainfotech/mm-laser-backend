import { AppraisalDTO } from "../dto/Appraisal.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("appraisal001mb", { schema: "erpnextgeneration5" })
export class Appraisal001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "apprId" })
  apprId: number;

  @Column("varchar", { name: "series", length: 30 })
  series: string;

  @Column("varchar", { name: "appraisalTemp", nullable: true, length: 40 })
  appraisalTemp: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(appraisalDTO: AppraisalDTO) {
    this.apprId = appraisalDTO.apprId;
    this.series = appraisalDTO.series;
    this.appraisalTemp = appraisalDTO.appraisalTemp;
    this.insertUser = appraisalDTO.insertUser;
    this.insertDatetime = appraisalDTO.insertDatetime;
    this.updatedUser = appraisalDTO.updatedUser;
    this.updatedDatetime = appraisalDTO.updatedDatetime;
}
}
