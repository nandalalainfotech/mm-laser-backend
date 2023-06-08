import { StkreconcileDTO } from "../dto/Stkreconcile.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("stkreconcile001mb", { schema: "erpnextgeneration5" })
export class Stkreconcile001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "stkrecId" })
  stkrecId: number;

  @Column("varchar", { name: "series", length: 50 })
  series: string;

  @Column("varchar", { name: "company", length: 50 })
  company: string;

  @Column("varchar", { name: "diffAcc", nullable: true, length: 50 })
  diffAcc: string | null;

  @Column("varchar", { name: "costCenter", nullable: true, length: 50 })
  costCenter: string | null;

  @Column("datetime", { name: "postingDate" })
  postingDate: Date;

  @Column("time", { name: "postingTime" })
  postingTime: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(stkreconcileDTO: StkreconcileDTO) {
    this.stkrecId = stkreconcileDTO.stkrecId;
    this.series = stkreconcileDTO.series;
    this.company = stkreconcileDTO.company;
    this.postingDate = stkreconcileDTO.postingDate;
    let postingTime = new Date(stkreconcileDTO.postingTime);
    this.postingTime = postingTime.getHours() + ":" + postingTime.getMinutes() + ":" + postingTime.getSeconds();
    this.diffAcc = stkreconcileDTO.diffAcc;
    this.costCenter = stkreconcileDTO.costCenter;
    this.insertUser = stkreconcileDTO.insertUser;
    this.insertDatetime = stkreconcileDTO.insertDatetime;
    this.updatedUser = stkreconcileDTO.updatedUser;
    this.updatedDatetime = stkreconcileDTO.updatedDatetime;
}
}
