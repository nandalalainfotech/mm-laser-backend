import { RecruitofferDTO } from "../dto/Recruitoffer.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("recruitoffer001mb", { schema: "erpnextgeneration5" })
export class Recruitoffer001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "offerId" })
  offerId: number;

  @Column("varchar", { name: "applicantNamePrefix", length: 30 })
  applicantNamePrefix: string;

  @Column("varchar", { name: "applicantName", length: 30 })
  applicantName: string;

  @Column("varchar", { name: "companyName", length: 30 })
  companyName: string;

  @Column("varchar", { name: "offer", length: 30 })
  offer: string;

  @Column("varchar", { name: "refer", length: 30 })
  refer: string;

  @Column("varchar", { name: "position", length: 30 })
  position: string;

  @Column("varchar", { name: "grade", length: 30 })
  grade: string;

  @Column("varchar", { name: "ctc", length: 30 })
  ctc: string;

  @Column("varchar", { name: "line1", length: 45 })
  line1: string;

  @Column("varchar", { name: "line2", length: 45 })
  line2: string;

  @Column("varchar", { name: "cityOrVillage", length: 30 })
  cityOrVillage: string;

  @Column("varchar", { name: "stateOrTerritory", length: 30 })
  stateOrTerritory: string;

  @Column("varchar", { name: "country", length: 30 })
  country: string;

  @Column("varchar", { name: "offerLetter", length: 30 })
  offerLetter: string;

  @Column("varchar", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("datetime", { name: "dateOfJoin" })
  dateOfJoin: Date;

  @Column("int", { name: "postalCode" })
  postalCode: number;

  @Column("int", { name: "phoneNo", nullable: true })
  phoneNo: number | null;

  @Column("int", { name: "alternativePhoneNo", nullable: true })
  alternativePhoneNo: number | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;


  setProperties(recruitofferDTO: RecruitofferDTO) {
    this.offerId = recruitofferDTO.offerId;
    this.applicantNamePrefix = recruitofferDTO.applicantNamePrefix;
    this.applicantName = recruitofferDTO.applicantName;
    this.companyName = recruitofferDTO.companyName;
    this.offer = recruitofferDTO.offer;
    this.refer = recruitofferDTO.refer;
    this.position = recruitofferDTO.position;
    this.grade = recruitofferDTO.grade;
    this.ctc = recruitofferDTO.ctc;
    this.dateOfJoin = recruitofferDTO.dateOfJoin;
    this.line1 = recruitofferDTO.line1;
    this.line2 = recruitofferDTO.line2;
    this.cityOrVillage = recruitofferDTO.cityOrVillage;
    this.stateOrTerritory = recruitofferDTO.stateOrTerritory;
    this.country = recruitofferDTO.country;
    this.postalCode = recruitofferDTO.postalCode;
    this.phoneNo = recruitofferDTO.phoneNo;
    this.alternativePhoneNo = recruitofferDTO.alternativePhoneNo;
    this.offerLetter = recruitofferDTO.offerLetter;
    this.status = recruitofferDTO.status;
    this.insertUser = recruitofferDTO.insertUser;
    this.insertDatetime = recruitofferDTO.insertDatetime;
    this.updatedUser = recruitofferDTO.updatedUser;
    this.updatedDatetime = recruitofferDTO.updatedDatetime;
}
}
