import { CrmspoppoDTO } from "../dto/Crmspoppo.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("crmspoppo001mb", { schema: "erpnextgeneration5" })
export class Crmspoppo001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "oppId" })
  oppId: number;

  @Column("varchar", { name: "oppSeries", length: 50 })
  oppSeries: string;

  @Column("varchar", { name: "oppType", nullable: true, length: 40 })
  oppType: string | null;

  @Column("varchar", { name: "oppFrom", nullable: true, length: 40 })
  oppFrom: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 40 })
  status: string | null;

  @Column("int", { name: "withitems", nullable: true })
  withitems: number | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(crmspoppoDTO: CrmspoppoDTO) {
    this.oppId = crmspoppoDTO.oppId;
    this.oppSeries = crmspoppoDTO.oppSeries;
    this.oppType = crmspoppoDTO.oppType;
    this.oppFrom = crmspoppoDTO.oppFrom;
    this.status = crmspoppoDTO.status;
    this.withitems = crmspoppoDTO.withitems;
    this.insertUser = crmspoppoDTO.insertUser;
    this.insertDatetime = crmspoppoDTO.insertDatetime;
    this.updatedUser = crmspoppoDTO.updatedUser;
    this.updatedDatetime = crmspoppoDTO.updatedDatetime;
}
}
