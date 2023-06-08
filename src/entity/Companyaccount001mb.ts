import { CompanyaccountDTO } from "../dto/Companyaccount.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("companyaccount001mb", { schema: "erpnextgeneration5" })
export class Companyaccount001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "caId" })
  caId: number;

  @Column("varchar", { name: "companyName", length: 100 })
  companyName: string;

  @Column("varchar", { name: "country", length: 60 })
  country: string;

  @Column("varchar", { name: "abbreviation", length: 50 })
  abbreviation: string;

  @Column("varchar", { name: "companyDomain", length: 60 })
  companyDomain: string;

  @Column("varchar", { name: "defholList", length: 50 })
  defholList: string;

  @Column("varchar", { name: "defCurrency", length: 50 })
  defCurrency: string;

  @Column("varchar", { name: "accchartType", length: 50 })
  accchartType: string;

  @Column("varchar", { name: "defbankAccount", length: 50 })
  defbankAccount: string;

  @Column("varchar", { name: "defcashAccount", length: 50 })
  defcashAccount: string;

  @Column("varchar", { name: "defpayAccount", length: 50 })
  defpayAccount: string;

  @Column("varchar", { name: "defincomeAccount", length: 50 })
  defincomeAccount: string;

  @Column("varchar", { name: "rndoffCenter", length: 50 })
  rndoffCenter: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  
  setProperties(companyaccountDTO: CompanyaccountDTO) {
    this.caId = companyaccountDTO.caId;
    this.companyName = companyaccountDTO.companyName;
    this.country = companyaccountDTO.country;
    this.abbreviation = companyaccountDTO.abbreviation;
    this.companyDomain = companyaccountDTO.companyDomain;
    this.defholList = companyaccountDTO.defholList;
    this.defCurrency = companyaccountDTO.defCurrency;
    this.accchartType = companyaccountDTO.accchartType;
    this.defbankAccount = companyaccountDTO.defbankAccount;
    this.defcashAccount = companyaccountDTO.defcashAccount;
    this.defpayAccount = companyaccountDTO.defpayAccount;
    this.defincomeAccount = companyaccountDTO.defincomeAccount;
    this.rndoffCenter = companyaccountDTO.rndoffCenter;
    this.insertUser = companyaccountDTO.insertUser;
    this.insertDatetime = companyaccountDTO.insertDatetime;
    this.updatedUser = companyaccountDTO.updatedUser;
    this.updatedDatetime = companyaccountDTO.updatedDatetime;
}
}
