import { StktransdeliverDTO } from "../dto/Stktransdeliver.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("stktransdeliver001mb", { schema: "erpnextgeneration5" })
export class Stktransdeliver001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "stdelId" })
  stdelId: number;

  @Column("varchar", { name: "title", length: 50 })
  title: string;

  @Column("varchar", { name: "status", length: 40 })
  status: string;

  @Column("varchar", { name: "delName", length: 30 })
  delName: string;

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

  setProperties(stktransdeliverDTO: StktransdeliverDTO) {
    this.stdelId = stktransdeliverDTO.stdelId;
    this.title = stktransdeliverDTO.title;
    this.status = stktransdeliverDTO.status;
    this.grandTotal = stktransdeliverDTO.grandTotal;
    this.delName = stktransdeliverDTO.delName;
    this.insertUser = stktransdeliverDTO.insertUser;
    this.insertDatetime = stktransdeliverDTO.insertDatetime;
    this.updatedUser = stktransdeliverDTO.updatedUser;
    this.updatedDatetime = stktransdeliverDTO.updatedDatetime;
}
}
