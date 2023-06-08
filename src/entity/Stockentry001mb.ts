import { StockentryDTO } from "../dto/Stockentry.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("stockentry001mb", { schema: "erpnextgeneration5" })
export class Stockentry001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "stockid" })
  stockid: number;

  @Column("varchar", { name: "materialrequest", length: 30 })
  materialrequest: string;

  @Column("int", { name: "Quantity", nullable: true })
  quantity: number | null;

  @Column("decimal", { name: "TransferedQty", precision: 3, scale: 1 })
  transferedQty: string;

  @Column("decimal", { name: "Qtytotransfer", precision: 3, scale: 1 })
  qtytotransfer: string;

  @Column("varchar", { name: "description", length: 30 })
  description: string;

  @Column("varchar", { name: "company", length: 40 })
  company: string;

  @Column("int", { name: "itemid", unsigned: true })
  itemid: number;

  @Column("datetime", { name: "date" })
  date: Date;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(stockentryDTO: StockentryDTO) {
    this.stockid = stockentryDTO.stockid;
    this.materialrequest = stockentryDTO.materialrequest;
    this.date = stockentryDTO.date;
    this.quantity = stockentryDTO.quantity;
    this.transferedQty = stockentryDTO.transferedQty;
    this.qtytotransfer = stockentryDTO.qtytotransfer;
    this.description = stockentryDTO.description;
    this.company = stockentryDTO.company;
    this.itemid = stockentryDTO.itemid;
    this.insertUser = stockentryDTO.insertUser;
    this.insertDatetime = stockentryDTO.insertDatetime;
    this.updatedUser = stockentryDTO.updatedUser;
    this.updatedDatetime = stockentryDTO.updatedDatetime;
}
}
