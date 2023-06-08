import { CurrencyexchangeDTO } from "../dto/Currencyexchange.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("currencyexchange001mb", { schema: "erpnextgeneration5" })
export class Currencyexchange001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "cuexId" })
  cuexId: number;

  @Column("varchar", { name: "cuexName", length: 50 })
  cuexName: string;

  @Column("int", { name: "fromCurrency" })
  fromCurrency: number;

  @Column("int", { name: "toCurrency" })
  toCurrency: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(currencyexchangeDTO: CurrencyexchangeDTO) {
    this.cuexId = currencyexchangeDTO.cuexId;
    this.cuexName = currencyexchangeDTO.cuexName;
    this.fromCurrency = currencyexchangeDTO.fromCurrency;
    this.toCurrency = currencyexchangeDTO.toCurrency;
    this.insertUser = currencyexchangeDTO.insertUser;
    this.insertDatetime = currencyexchangeDTO.insertDatetime;
    this.updatedUser = currencyexchangeDTO.updatedUser;
    this.updatedDatetime = currencyexchangeDTO.updatedDatetime;
}
}
