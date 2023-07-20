import { MachinemasterDTO } from "src/dto/Machinemaster.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("machinemaster001hb", { schema: "mmlaser" })
export class Machinemaster001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "sl_no" })
  slNo: number;

  @Column("varchar", { name: "machinename", nullable: true, length: 255 })
  machinename: string | null;

  @Column("tinyint", { name: "status", width: 1 })
  status: boolean;

  @Column("varchar", { name: "insert_user", nullable: true, length: 40 })
  insertUser: string | null;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;


  setProperties(machinemasterDTO: MachinemasterDTO) {
    this.slNo = machinemasterDTO.slNo;
    this.machinename = machinemasterDTO.machinename;
    this.status = machinemasterDTO.status;
    this.insertUser = machinemasterDTO.insertUser;
    this.insertDatetime = machinemasterDTO.insertDatetime;
    this.updatedUser = machinemasterDTO.updatedUser;
    this.updatedDatetime = machinemasterDTO.updatedDatetime;
  }
}
