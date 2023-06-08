import { PackingslipDTO } from "../dto/Packingslip.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("packingslip001hb", { schema: "erpnextgeneration5" })
export class Packingslip001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "psId" })
  psId: number;

  @Column("varchar", { name: "slipName", length: 50 })
  slipName: string;

  @Column("varchar", { name: "status", length: 50 })
  status: string;

  @Column("varchar", { name: "delName", length: 50 })
  delName: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(packingslipDTO: PackingslipDTO) {
    this.psId = packingslipDTO.psId;
    this.slipName = packingslipDTO.slipName;
    this.status = packingslipDTO.status;
    this.delName = packingslipDTO.delName;
    this.insertUser = packingslipDTO.insertUser;
    this.insertDatetime = packingslipDTO.insertDatetime;
    this.updatedUser = packingslipDTO.updatedUser;
    this.updatedDatetime = packingslipDTO.updatedDatetime;
}
}
