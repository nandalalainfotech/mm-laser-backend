import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MachinemasterDTO } from "src/dto/Machinemaster.dto";
import { Bookingentry001mb } from "./Bookingentry001mb";
import { Bookingentry001hb } from "./Bookingentry001hb";

@Entity("machinemaster001mb", { schema: "erpnextgeneration5" })
export class Machinemaster001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "sl_no" })
  slNo: number;

  @Column("varchar", { name: "machinename", nullable: true, length: 255 })
  machinename: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("varchar", { name: "insert_user", nullable: true, length: 40 })
  insertUser: string | null;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @OneToMany(
    () => Bookingentry001hb,
    (bookingentry001hb) => bookingentry001hb.mslno2
  )
  bookingentry001hbs: Bookingentry001hb[];

  @OneToMany(
    () => Bookingentry001mb,
    (bookingentry001mb) => bookingentry001mb.mslno2
  )
  bookingentry001mbs: Bookingentry001mb[];


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
