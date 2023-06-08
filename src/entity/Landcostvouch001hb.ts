import { LandcostvouchDTO } from "../dto/Landcostvouch.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("landcostvouch001hb", { schema: "erpnextgeneration5" })
export class Landcostvouch001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "vouchId" })
  vouchId: number;

  @Column("varchar", { name: "series", length: 50 })
  series: string;

  @Column("varchar", { name: "company", length: 40 })
  company: string;

  @Column("varchar", { name: "recptdocType", length: 50 })
  recptdocType: string;

  @Column("varchar", { name: "recptdoc", length: 50 })
  recptdoc: string;

  @Column("varchar", { name: "supName", length: 50 })
  supName: string;

  @Column("int", { name: "grandTotal" })
  grandTotal: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(landcostvouchDTO: LandcostvouchDTO) {
    this.vouchId = landcostvouchDTO.vouchId;
    this.series = landcostvouchDTO.series;
    this.company = landcostvouchDTO.company;
    this.recptdocType = landcostvouchDTO.recptdocType;
    this.recptdoc = landcostvouchDTO.recptdoc;
    this.supName = landcostvouchDTO.supName;
    this.grandTotal = landcostvouchDTO.grandTotal;
    this.insertUser = landcostvouchDTO.insertUser;
    this.insertDatetime = landcostvouchDTO.insertDatetime;
    this.updatedUser = landcostvouchDTO.updatedUser;
    this.updatedDatetime = landcostvouchDTO.updatedDatetime;
}
}
