import { RecruitapplicantDTO } from "../dto/Recruitapplicant.dto";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("jobId", ["jobId"], {})
@Entity("recruitapplicant001mb", { schema: "erpnextgeneration5" })
export class Recruitapplicant001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "appId" })
  appId: number;

  @Column("varchar", { name: "applicantName", length: 40 })
  applicantName: string;

  @Column("varchar", { name: "status", length: 30 })
  status: string;

  @Column("int", { name: "jobId", nullable: true })
  jobId: number | null;

  @Column("varchar", { name: "jobName", nullable: true, length: 255 })
  jobName: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(recruitapplicantDTO: RecruitapplicantDTO) {
    this.appId = recruitapplicantDTO.appId;
    this.applicantName = recruitapplicantDTO.applicantName;
    this.status = recruitapplicantDTO.status;
    this.jobId = recruitapplicantDTO.jobId;
    this.jobName = recruitapplicantDTO.jobName;
    this.insertUser = recruitapplicantDTO.insertUser;
    this.insertDatetime = recruitapplicantDTO.insertDatetime;
    this.updatedUser = recruitapplicantDTO.updatedUser;
    this.updatedDatetime = recruitapplicantDTO.updatedDatetime;
}
}
