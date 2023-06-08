import { AccountsetupDTO } from "../dto/Accountsetup.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("accountsetup001hb", { schema: "erpnextgeneration5" })
export class Accountsetup001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "setId" })
  setId: number;

  @Column("varchar", { name: "mkentryforstkMang", nullable: true, length: 20 })
  mkentryforstkMang: string | null;

  @Column("varchar", { name: "accfrozenUpto", length: 30 })
  accfrozenUpto: string;

  @Column("varchar", { name: "creditName", length: 60 })
  creditName: string;

  @Column("varchar", { name: "roleallowedtoFreeze", length: 60 })
  roleallowedtoFreeze: string;

  @Column("varchar", { name: "chksupinvoice", nullable: true, length: 20 })
  chksupinvoice: string | null;

  @Column("varchar", { name: "mkpayviaJournal", nullable: true, length: 20 })
  mkpayviaJournal: string | null;

  @Column("varchar", { name: "unlinkpayonCancel", nullable: true, length: 20 })
  unlinkpayonCancel: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(accountsetupDTO: AccountsetupDTO) {
    this.setId = accountsetupDTO.setId;
    this.mkentryforstkMang = accountsetupDTO.mkentryforstkMang;
    this.accfrozenUpto = accountsetupDTO.accfrozenUpto;
    this.creditName = accountsetupDTO.creditName;
    this.roleallowedtoFreeze = accountsetupDTO.roleallowedtoFreeze;
    this.chksupinvoice = accountsetupDTO.chksupinvoice;
    this.mkpayviaJournal = accountsetupDTO.mkpayviaJournal;
    this.unlinkpayonCancel = accountsetupDTO.unlinkpayonCancel;
    this.insertUser = accountsetupDTO.insertUser;
    this.insertDatetime = accountsetupDTO.insertDatetime;
    this.updatedUser = accountsetupDTO.updatedUser;
    this.updatedDatetime = accountsetupDTO.updatedDatetime;
  }
}
