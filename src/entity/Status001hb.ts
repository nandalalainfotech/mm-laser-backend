import { StatusDTO } from "../dto/Status.dto";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Statusname", ["statusname"], { unique: true })
@Entity("status001hb", { schema: "erpnextgeneration5" })
export class Status001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "Statusid" })
  statusid: number;

  @Column("varchar", {
    name: "Statusname",
    nullable: true,
    unique: true,
    length: 40,
  })
  statusname: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(statusDTO: StatusDTO) {
    this.statusid = statusDTO.statusid;
    this.statusname = statusDTO.statusname;
    this.insertUser = statusDTO.insertUser;
    this.insertDatetime = statusDTO.insertDatetime;
    this.updatedUser = statusDTO.updatedUser;
    this.updatedDatetime = statusDTO.updatedDatetime;
}
}
