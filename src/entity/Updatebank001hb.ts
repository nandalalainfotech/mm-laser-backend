import { UpdatebankDTO } from "../dto/Updatebank.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("updatebank001hb", { schema: "erpnextgeneration5" })
export class Updatebank001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "bankaccount", length: 45 })
  bankaccount: string;

  @Column("varchar", { name: "customername", length: 50 })
  customername: string;

  @Column("decimal", {
    name: "amount",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  amount: string | null;

  @Column("varchar", { name: "chqNumber", nullable: true, length: 50 })
  chqNumber: string | null;

  @Column("datetime", { name: "fromdate" })
  fromdate: Date;

  @Column("datetime", { name: "todate" })
  todate: Date;

  @Column("datetime", { name: "clearanceDate" })
  clearanceDate: Date;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(updatebankDTO: UpdatebankDTO) {
    this.id = updatebankDTO.id;
    this.bankaccount = updatebankDTO.bankaccount;
    this.fromdate = updatebankDTO.fromdate;
    this.todate = updatebankDTO.todate;
    this.customername = updatebankDTO.customername;
    this.amount = updatebankDTO.amount;
    this.chqNumber = updatebankDTO.chqNumber;
    this.clearanceDate = updatebankDTO.clearanceDate;
    this.insertUser = updatebankDTO.insertUser;
    this.insertDatetime = updatebankDTO.insertDatetime;
    this.updatedUser = updatebankDTO.updatedUser;
    this.updatedDatetime = updatebankDTO.updatedDatetime;
}
}
