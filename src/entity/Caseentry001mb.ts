import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Doctormaster001mb } from "./Doctormaster001mb";
import { Casemachine001hb } from "./Casemachine001hb";
import { Casemachine001wb } from "./Casemachine001wb";
import { CaseentryDTO } from "src/dto/Caseentry.dto";

@Index("doctorname", ["doctorname"], {})
@Index("hospname", ["hospname"], {})
@Entity("caseentry001mb", { schema: "erpnextgeneration5" })
export class Caseentry001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "caseentryId" })
  caseentryId: number;

  @Column("int", { name: "doctorname" })
  doctorname: number;

  @Column("int", { name: "hospname" })
  hospname: number;

  @Column("varchar", { name: "charge", length: 200 })
  charge: string;

  @Column("varchar", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @ManyToOne(
    () => Doctormaster001mb,
    (doctormaster001mb) => doctormaster001mb.caseentry001mbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "doctorname", referencedColumnName: "slNo" }])
  doctorname2: Doctormaster001mb;

  @ManyToOne(
    () => Doctormaster001mb,
    (doctormaster001mb) => doctormaster001mb.caseentry001mbs2,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "hospname", referencedColumnName: "slNo" }])
  hospname2: Doctormaster001mb;

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
    this.charge = caseentryDTO.charge;
    this.status = caseentryDTO.status;
    this.insertUser = caseentryDTO.insertUser;
    this.insertDatetime = caseentryDTO.insertDatetime;
    this.updatedUser = caseentryDTO.updatedUser;
    this.updatedDatetime = caseentryDTO.updatedDatetime;
  }
}
