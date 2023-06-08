import { CustomercreditbalanceDTO } from "../dto/Customercreditbalance.dto";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["id"], {})
@Entity("customercreditbalance001hb", { schema: "erpnextgeneration5" })
export class Customercreditbalance001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "ccid" })
  ccid: number;

  @Column("varchar", { name: "customer", nullable: true, length: 45 })
  customer: string | null;

  @Column("int", { name: "id" })
  id: number;

  @Column("varchar", { name: "Customername", nullable: true, length: 40 })
  customername: string | null;

  @Column("mediumtext", { name: "creditlimit" })
  creditlimit: string;

  @Column("mediumtext", { name: "outstandingamount" })
  outstandingamount: string;

  @Column("mediumtext", { name: "creditbalance" })
  creditbalance: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;
  setProperties(customercreditbalanceDTO: CustomercreditbalanceDTO) {
    this.ccid = customercreditbalanceDTO.ccid;
    this.customer = customercreditbalanceDTO.customer;
    this.creditlimit = customercreditbalanceDTO.creditlimit;
    this.outstandingamount = customercreditbalanceDTO.outstandingamount;
    this.creditbalance = customercreditbalanceDTO.creditbalance;
    this.customername = customercreditbalanceDTO.customername;
    this.insertUser = customercreditbalanceDTO.insertUser;
    this.insertDatetime = customercreditbalanceDTO.insertDatetime;
    this.updatedUser = customercreditbalanceDTO.updatedUser;
    this.updatedDatetime = customercreditbalanceDTO.updatedDatetime;
}
}
