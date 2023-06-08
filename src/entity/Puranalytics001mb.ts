import { PuranalyticsDTO } from "../dto/Puranalytics.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("puranalytics001mb", { schema: "erpnextgeneration5" })
export class Puranalytics001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "puansId" })
  puansId: number;

  @Column("varchar", { name: "treeType", length: 50 })
  treeType: string;

  @Column("varchar", { name: "basedOn", length: 50 })
  basedOn: string;

  @Column("varchar", { name: "valueorqty", length: 40 })
  valueorqty: string;

  @Column("varchar", { name: "company", length: 50 })
  company: string;

  @Column("varchar", { name: "anRange", nullable: true, length: 50 })
  anRange: string | null;

  @Column("datetime", { name: "fromDate" })
  fromDate: Date;

  @Column("datetime", { name: "toDate" })
  toDate: Date;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(puranalyticsDTO: PuranalyticsDTO) {
    this.puansId = puranalyticsDTO.puansId;
    this.treeType = puranalyticsDTO.treeType;
    this.basedOn = puranalyticsDTO.basedOn;
    this.valueorqty = puranalyticsDTO.valueorqty;
    this.company = puranalyticsDTO.company;
    this.fromDate = puranalyticsDTO.fromDate;
    this.toDate = puranalyticsDTO.toDate;
    this.anRange = puranalyticsDTO.anRange;
    this.insertUser = puranalyticsDTO.insertUser;
    this.insertDatetime = puranalyticsDTO.insertDatetime;
    this.updatedUser = puranalyticsDTO.updatedUser;
    this.updatedDatetime = puranalyticsDTO.updatedDatetime;
}
}
