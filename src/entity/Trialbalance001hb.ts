import { TrialbalanceDTO } from "../dto/Trialbalance.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("trialbalance001hb", { schema: "erpnextgeneration5" })
export class Trialbalance001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "account", length: 45 })
  account: string;

  @Column("int", { name: "openingcr", unsigned: true })
  openingcr: number;

  @Column("int", { name: "openingdr", unsigned: true })
  openingdr: number;

  @Column("int", { name: "closingcr", unsigned: true })
  closingcr: number;

  @Column("int", { name: "closingdr", unsigned: true })
  closingdr: number;

  @Column("int", { name: "credit", unsigned: true })
  credit: number;

  @Column("int", { name: "debit", unsigned: true })
  debit: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(trialbalanceDTO: TrialbalanceDTO) {
    this.id = trialbalanceDTO.id;
    this.openingcr = trialbalanceDTO.openingcr;
    this.openingdr = trialbalanceDTO.openingdr;
    this.closingcr = trialbalanceDTO.closingcr;
    this.closingdr = trialbalanceDTO.closingdr;
    this.account = trialbalanceDTO.account; ``
    this.credit = trialbalanceDTO.credit;
    this.debit = trialbalanceDTO.debit;
    this.insertUser = trialbalanceDTO.insertUser;
    this.insertDatetime = trialbalanceDTO.insertDatetime;
    this.updatedUser = trialbalanceDTO.updatedUser;
    this.updatedDatetime = trialbalanceDTO.updatedDatetime;
}
}
