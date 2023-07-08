import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Machinemaster001mb } from "./Machinemaster001mb";
import { Doctormaster001mb } from "./Doctormaster001mb";
import { Caseentry001hb } from "./Caseentry001hb";
import { Caseentry001mb } from "./Caseentry001mb";
import { BookingentryDTO } from "src/dto/Bookingentry.dto";

@Index("mslno", ["mslno"], {})
@Index("dslno", ["dslno"], {})
@Entity("bookingentry001mb", { schema: "erpnextgeneration5" })
export class Bookingentry001mb {
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

  @Column("varchar", { name: "status", length: 50 })
  status: string;

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
    (machinemaster001mb) => machinemaster001mb.bookingentry001mbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "mslno", referencedColumnName: "slNo" }])
  mslno2: Machinemaster001mb;

  @ManyToOne(
    () => Doctormaster001mb,
    (doctormaster001mb) => doctormaster001mb.bookingentry001mbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "dslno", referencedColumnName: "slNo" }])
  dslno2: Doctormaster001mb;

  @OneToMany(
    () => Caseentry001hb,
    (caseentry001hb) => caseentry001hb.appointmentNo2
  )
  caseentry001hbs: Caseentry001hb[];

  @OneToMany(
    () => Caseentry001mb,
    (caseentry001mb) => caseentry001mb.appointmentNo2
  )
  caseentry001mbs: Caseentry001mb[];

  setProperties(bookingentryDTO: BookingentryDTO) {
    this.bookingId = bookingentryDTO.bookingId;
    this.mslno = bookingentryDTO.mslno;
    this.dslno = bookingentryDTO.dslno;
    this.staff = bookingentryDTO.staff;
    this.status = bookingentryDTO.status;
    this.date = bookingentryDTO.date;
    this.appNo = bookingentryDTO.appNo;
    this.time = bookingentryDTO.time;
    this.hospital = bookingentryDTO.hospital;
    this.insertUser = bookingentryDTO.insertUser;
    this.insertDatetime = bookingentryDTO.insertDatetime;
    this.updatedUser = bookingentryDTO.updatedUser;
    this.updatedDatetime = bookingentryDTO.updatedDatetime;
  }
}
