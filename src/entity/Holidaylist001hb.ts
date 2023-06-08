import { HolidaylistDTO } from "../dto/Holidaylist.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("holidaylist001hb", { schema: "erpnextgeneration5" })
export class Holidaylist001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "hlistId" })
  hlistId: number;

  @Column("varchar", { name: "holidayName", length: 30 })
  holidayName: string;

  @Column("varchar", { name: "weeklyOff", nullable: true, length: 30 })
  weeklyOff: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(holidaylistDTO: HolidaylistDTO) {
    this.hlistId = holidaylistDTO.hlistId;
    this.holidayName = holidaylistDTO.holidayName;
    this.weeklyOff = holidaylistDTO.weeklyOff;
    this.insertUser = holidaylistDTO.insertUser;
    this.insertDatetime = holidaylistDTO.insertDatetime;
    this.updatedUser = holidaylistDTO.updatedUser;
    this.updatedDatetime = holidaylistDTO.updatedDatetime;
}
}
