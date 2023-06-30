import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Doctormaster001mb } from "./Doctormaster001mb";
import { CaseentryDTO } from "src/dto/Caseentry.dto";

@Index("doctorname", ["doctorname"], {})
@Index("hospname", ["hospname"], {})
@Entity("caseentry001hb", { schema: "erpnextgeneration5" })
export class Caseentry001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "caseentryId" })
  caseentryId: number;

  @Column("int", { name: "doctorname" })
  doctorname: number;

  @Column("int", { name: "hospname" })
  hospname: number;

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
    () => Doctormaster001mb,
    (doctormaster001mb) => doctormaster001mb.caseentry001hbs,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "doctorname", referencedColumnName: "slNo" }])
  doctorname2: Doctormaster001mb;

  @ManyToOne(
    () => Doctormaster001mb,
    (doctormaster001mb) => doctormaster001mb.caseentry001hbs2,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "hospname", referencedColumnName: "slNo" }])
  hospname2: Doctormaster001mb;



  setProperties(caseentryDTO: CaseentryDTO) {
    this.caseentryId = caseentryDTO.caseentryId;
    this.doctorname = caseentryDTO.doctorname;
    this.hospname = caseentryDTO.hospname;
    this.status = caseentryDTO.status;
    this.insertUser = caseentryDTO.insertUser;
    this.insertDatetime = caseentryDTO.insertDatetime;
    this.updatedUser = caseentryDTO.updatedUser;
    this.updatedDatetime = caseentryDTO.updatedDatetime;
  }
}
