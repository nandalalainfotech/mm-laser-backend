import { StktransentryDTO } from "../dto/Stktransentry.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("stktransentry001mb", { schema: "erpnextgeneration5" })
export class Stktransentry001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "stentId" })
  stentId: number;

  @Column("varchar", { name: "title", length: 50 })
  title: string;

  @Column("varchar", { name: "status", length: 40 })
  status: string;

  @Column("varchar", { name: "purpose", length: 50 })
  purpose: string;

  @Column("varchar", { name: "stName", length: 30 })
  stName: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(stktransentryDTO: StktransentryDTO) {
    this.stentId = stktransentryDTO.stentId;
    this.title = stktransentryDTO.title;
    this.status = stktransentryDTO.status;
    this.purpose = stktransentryDTO.purpose;
    this.stName = stktransentryDTO.stName;
    this.insertUser = stktransentryDTO.insertUser;
    this.insertDatetime = stktransentryDTO.insertDatetime;
    this.updatedUser = stktransentryDTO.updatedUser;
    this.updatedDatetime = stktransentryDTO.updatedDatetime;
}
}
