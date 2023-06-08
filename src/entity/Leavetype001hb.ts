import { LeavetypeDTO } from "../dto/Leavetype.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("leavetype001hb", { schema: "erpnextgeneration5" })
export class Leavetype001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "lvtypeId" })
  lvtypeId: number;

  @Column("varchar", { name: "lvtypeName", length: 30 })
  lvtypeName: string;

  @Column("int", { name: "maxdaysAllowed" })
  maxdaysAllowed: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(leavetypeDTO: LeavetypeDTO) {
    this.lvtypeId = leavetypeDTO.lvtypeId;
    this.lvtypeName = leavetypeDTO.lvtypeName;
    this.maxdaysAllowed = leavetypeDTO.maxdaysAllowed;
    this.insertUser = leavetypeDTO.insertUser;
    this.insertDatetime = leavetypeDTO.insertDatetime;
    this.updatedUser = leavetypeDTO.updatedUser;
    this.updatedDatetime = leavetypeDTO.updatedDatetime;
}
}
