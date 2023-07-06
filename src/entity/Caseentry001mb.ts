import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bookingentry001mb } from "./Bookingentry001mb";
import { Doctormaster001mb } from "./Doctormaster001mb";
import { Casemachine001hb } from "./Casemachine001hb";
import { Casemachine001wb } from "./Casemachine001wb";
import { CaseentryDTO } from "src/dto/Caseentry.dto";

@Index("appointmentNo", ["appointmentNo"], {})
@Index("doctorname", ["doctorname"], {})
@Entity("caseentry001mb", { schema: "erpnextgeneration5" })
export class Caseentry001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "caseentryId" })
  caseentryId: number;

  @Column("int", { name: "appointmentNo" })
  appointmentNo: number;

  @Column("int", { name: "doctorname" })
  doctorname: number;

  @Column("varchar", { name: "hospname", length: 40 })
  hospname: string;

  @Column("tinyint", { name: "status", width: 1 })
  status: boolean;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @ManyToOne(
    () => Bookingentry001mb,
    (bookingentry001mb) => bookingentry001mb.caseentry001mbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "appointmentNo", referencedColumnName: "bookingId" }])
  appointmentNo2: Bookingentry001mb;

  @ManyToOne(
    () => Doctormaster001mb,
    (doctormaster001mb) => doctormaster001mb.caseentry001mbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "doctorname", referencedColumnName: "slNo" }])
  doctorname2: Doctormaster001mb;

  @OneToMany(
    () => Casemachine001hb,
    (casemachine001hb) => casemachine001hb.cslno2
  )
  casemachine001hbs: Casemachine001hb[];

  @OneToMany(
    () => Casemachine001wb,
    (casemachine001wb) => casemachine001wb.cslno2
  )
  casemachine001wbs: Casemachine001wb[];



  setProperties(caseentryDTO: CaseentryDTO) {
    this.caseentryId = caseentryDTO.caseentryId;
    this.doctorname = caseentryDTO.doctorname;
    this.hospname = caseentryDTO.hospname;
    this.status = caseentryDTO.status;
    this.appointmentNo = caseentryDTO.appointmentNo
    this.insertUser = caseentryDTO.insertUser;
    this.insertDatetime = caseentryDTO.insertDatetime;
    this.updatedUser = caseentryDTO.updatedUser;
    this.updatedDatetime = caseentryDTO.updatedDatetime;
  }
}
