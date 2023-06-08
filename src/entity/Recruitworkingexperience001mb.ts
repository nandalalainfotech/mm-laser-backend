import { RecruitworkingexperienceDTO } from "../dto/Recruitworkingexperience.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("recruitworkingexperience001mb", { schema: "erpnextgeneration5" })
export class Recruitworkingexperience001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "workingexperienceId" })
  workingexperienceId: number;

  @Column("varchar", { name: "applicantNamePrefix", length: 10 })
  applicantNamePrefix: string;

  @Column("varchar", { name: "applicantName", length: 45 })
  applicantName: string;

  @Column("varchar", { name: "companyName", length: 30 })
  companyName: string;

  @Column("varchar", { name: "position", length: 30 })
  position: string;

  @Column("varchar", { name: "grade", length: 20 })
  grade: string;

  @Column("varchar", { name: "workingexperienceLetter", length: 30 })
  workingexperienceLetter: string;

  @Column("datetime", { name: "dateOfJoin" })
  dateOfJoin: Date;

  @Column("datetime", { name: "dateOfRelieve" })
  dateOfRelieve: Date;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(recruitworkingexperienceDTO: RecruitworkingexperienceDTO) {
    this.workingexperienceId = recruitworkingexperienceDTO.workingexperienceId;
    this.applicantNamePrefix = recruitworkingexperienceDTO.applicantNamePrefix;
    this.applicantName = recruitworkingexperienceDTO.applicantName;
    this.companyName = recruitworkingexperienceDTO.companyName;
    this.position = recruitworkingexperienceDTO.position;
    this.grade = recruitworkingexperienceDTO.grade;
    this.dateOfJoin = recruitworkingexperienceDTO.dateOfJoin;
    this.dateOfRelieve = recruitworkingexperienceDTO.dateOfRelieve;
    this.workingexperienceLetter = recruitworkingexperienceDTO.workingexperienceLetter;
    this.insertUser = recruitworkingexperienceDTO.insertUser;
    this.insertDatetime = recruitworkingexperienceDTO.insertDatetime;
    this.updatedUser = recruitworkingexperienceDTO.updatedUser;
    this.updatedDatetime = recruitworkingexperienceDTO.updatedDatetime;
}
}
