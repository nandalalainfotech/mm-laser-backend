import { StktranspurecptDTO } from "../dto/Stktranspurecpt.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("stktranspurecpt001hb", { schema: "erpnextgeneration5" })
export class Stktranspurecpt001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "stpurtId" })
  stpurtId: number;

  @Column("varchar", { name: "title", length: 50 })
  title: string;

  @Column("varchar", { name: "status", length: 40 })
  status: string;

  @Column("varchar", { name: "purtName", length: 40 })
  purtName: string;

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

  setProperties(stktranspurecptDTO: StktranspurecptDTO) {
    this.stpurtId = stktranspurecptDTO.stpurtId;
    this.title = stktranspurecptDTO.title;
    this.status = stktranspurecptDTO.status;
    this.grandTotal = stktranspurecptDTO.grandTotal;
    this.purtName = stktranspurecptDTO.purtName;
    this.insertUser = stktranspurecptDTO.insertUser;
    this.insertDatetime = stktranspurecptDTO.insertDatetime;
    this.updatedUser = stktranspurecptDTO.updatedUser;
    this.updatedDatetime = stktranspurecptDTO.updatedDatetime;
}
}
