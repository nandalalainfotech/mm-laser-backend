import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Machinemaster001mb } from "./Machinemaster001mb";
import { Doctormaster001mb } from "./Doctormaster001mb";
import { BookingentryDTO } from "src/dto/Bookingentry.dto";

@Index("mslno", ["mslno"], {})
@Index("dslno", ["dslno"], {})
@Entity("bookingentry001hb", { schema: "erpnextgeneration5" })
export class Bookingentry001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "bookingId" })
  bookingId: number;

  @Column("int", { name: "mslno" })
  mslno: number;

  @Column("int", { name: "dslno" })
  dslno: number;

  @Column("varchar", { name: "appNo", length: 50 })
  appNo: string;

  @Column("datetime", { name: "date" })
  date: Date;

  @Column("varchar", { name: "staff", length: 200 })
  staff: string;

  @Column("varchar", { name: "hospital", length: 50 })
  hospital: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @Column("time", { name: "time", nullable: true })
  time: string | null;

  @ManyToOne(
    () => Machinemaster001mb,
    (machinemaster001mb) => machinemaster001mb.bookingentry001hbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "mslno", referencedColumnName: "slNo" }])
  mslno2: Machinemaster001mb;

  @ManyToOne(
    () => Doctormaster001mb,
    (doctormaster001mb) => doctormaster001mb.bookingentry001hbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "dslno", referencedColumnName: "slNo" }])
  dslno2: Doctormaster001mb;



  setProperties(bookingentryDTO: BookingentryDTO) {
    this.bookingId = bookingentryDTO.bookingId;
    this.mslno = bookingentryDTO.mslno;
    this.dslno = bookingentryDTO.dslno;
    this.staff = bookingentryDTO.staff;
    this.date = bookingentryDTO.date;
    this.appNo = bookingentryDTO.appNo
    this.time = bookingentryDTO.time;
    this.hospital = bookingentryDTO.hospital;
    this.insertUser = bookingentryDTO.insertUser;
    this.insertDatetime = bookingentryDTO.insertDatetime;
    this.updatedUser = bookingentryDTO.updatedUser;
    this.updatedDatetime = bookingentryDTO.updatedDatetime;
  }
}
