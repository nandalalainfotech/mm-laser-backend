import { RecruitrelievingDTO } from "../dto/Recruitrelieving.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("recruitrelieving001mb", { schema: "erpnextgeneration5" })
export class Recruitrelieving001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "relievingId" })
  relievingId: number;

  @Column("varchar", { name: "applicantNamePrefix", length: 30 })
  applicantNamePrefix: string;

  @Column("varchar", { name: "applicantName", length: 30 })
  applicantName: string;

  @Column("varchar", { name: "companyName", length: 30 })
  companyName: string;

  @Column("varchar", { name: "position", length: 30 })
  position: string;

  @Column("varchar", { name: "grade", length: 30 })
  grade: string;

  @Column("varchar", { name: "line1", length: 30 })
  line1: string;

  @Column("varchar", { name: "line2", length: 30 })
  line2: string;

  @Column("varchar", { name: "cityOrVillage", length: 30 })
  cityOrVillage: string;

  @Column("varchar", { name: "stateOrTerritory", length: 30 })
  stateOrTerritory: string;

  @Column("varchar", { name: "country", length: 30 })
  country: string;

  @Column("varchar", { name: "relievingLetter", length: 45 })
  relievingLetter: string;

  @Column("datetime", { name: "dateOfJoin" })
  dateOfJoin: Date;

  @Column("datetime", { name: "dateOfRelieve" })
  dateOfRelieve: Date;

  @Column("int", { name: "postalCode" })
  postalCode: number;

  @Column("varchar", { name: "phoneNo", nullable: true, length: 15 })
  phoneNo: string | null;

  @Column("varchar", { name: "alternativePhoneNo", nullable: true, length: 15 })
  alternativePhoneNo: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(recruitrelievingDTO: RecruitrelievingDTO) {
    this.relievingId = recruitrelievingDTO.relievingId;
    this.applicantNamePrefix = recruitrelievingDTO.applicantNamePrefix;
    this.applicantName = recruitrelievingDTO.applicantName;
    this.companyName = recruitrelievingDTO.companyName;
    this.position = recruitrelievingDTO.position;
    this.grade = recruitrelievingDTO.grade;
    this.dateOfJoin = recruitrelievingDTO.dateOfJoin;
    this.dateOfRelieve = recruitrelievingDTO.dateOfRelieve;
    this.line1 = recruitrelievingDTO.line1;
    this.line2 = recruitrelievingDTO.line2;
    this.cityOrVillage = recruitrelievingDTO.cityOrVillage;
    this.stateOrTerritory = recruitrelievingDTO.stateOrTerritory;
    this.country = recruitrelievingDTO.country;
    this.postalCode = recruitrelievingDTO.postalCode;
    this.phoneNo = recruitrelievingDTO.phoneNo;
    this.alternativePhoneNo = recruitrelievingDTO.alternativePhoneNo;
    this.relievingLetter = recruitrelievingDTO.relievingLetter;
    this.insertUser = recruitrelievingDTO.insertUser;
    this.insertDatetime = recruitrelievingDTO.insertDatetime;
    this.updatedUser = recruitrelievingDTO.updatedUser;
    this.updatedDatetime = recruitrelievingDTO.updatedDatetime;
}
}
