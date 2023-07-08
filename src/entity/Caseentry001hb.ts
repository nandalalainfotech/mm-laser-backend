import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bookingentry001mb } from "./Bookingentry001mb";
import { Doctormaster001mb } from "./Doctormaster001mb";
import { CaseentryDTO } from "src/dto/Caseentry.dto";

@Index("appointmentNo", ["appointmentNo"], {})
@Index("doctorname", ["doctorname"], {})
@Entity("caseentry001hb", { schema: "erpnextgeneration5" })
export class Caseentry001hb {
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
    (bookingentry001mb) => bookingentry001mb.caseentry001hbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "appointmentNo", referencedColumnName: "bookingId" }])
  appointmentNo2: Bookingentry001mb;

  @ManyToOne(
    () => Doctormaster001mb,
    (doctormaster001mb) => doctormaster001mb.caseentry001hbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "doctorname", referencedColumnName: "slNo" }])
  doctorname2: Doctormaster001mb;




  setProperties(caseentryDTO: CaseentryDTO) {
    this.caseentryId = caseentryDTO.caseentryId;
    this.appointmentNo = caseentryDTO.appointmentNo
    this.doctorname = caseentryDTO.doctorname;
    this.hospname = caseentryDTO.hospname;
    this.status = caseentryDTO.status;
    this.insertUser = caseentryDTO.insertUser;
    this.insertDatetime = caseentryDTO.insertDatetime;
    this.updatedUser = caseentryDTO.updatedUser;
    this.updatedDatetime = caseentryDTO.updatedDatetime;
  }
}
