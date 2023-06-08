import { CurrencyDTO } from "../dto/Currency.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("currency001mb", { schema: "erpnextgeneration5" })
export class Currency001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "currId" })
  currId: number;

  @Column("varchar", { name: "currencyName", length: 30 })
  currencyName: string;

  @Column("varchar", { name: "currencyAbbr", nullable: true, length: 60 })
  currencyAbbr: string | null;

  @Column("varchar", { name: "fractionName", nullable: true, length: 40 })
  fractionName: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(currencyDTO: CurrencyDTO) {
    this.currId = currencyDTO.currId;
    this.currencyName = currencyDTO.currencyName;
    this.currencyAbbr = currencyDTO.currencyAbbr;
    this.fractionName = currencyDTO.fractionName;
    this.insertUser = currencyDTO.insertUser;
    this.insertDatetime = currencyDTO.insertDatetime;
    this.updatedUser = currencyDTO.updatedUser;
    this.updatedDatetime = currencyDTO.updatedDatetime;
}
}
