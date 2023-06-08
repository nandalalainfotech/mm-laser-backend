import { PurchasereceiptDTO } from "../dto/Purchasereceipt.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("purchasereceipt001hb", { schema: "erpnextgeneration5" })
export class Purchasereceipt001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "supplier", length: 30 })
  supplier: string;

  @Column("datetime", { name: "Date" })
  date: Date;

  @Column("varchar", { name: "supplieraddress", length: 30 })
  supplieraddress: string;

  @Column("int", { name: "grandtotal" })
  grandtotal: number;

  @Column("varchar", { name: "status", length: 50 })
  status: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(purchasereceiptDTO: PurchasereceiptDTO) {
    this.id = purchasereceiptDTO.id;
    this.supplier = purchasereceiptDTO.supplier;
    this.date = purchasereceiptDTO.date;
    this.supplieraddress = purchasereceiptDTO.supplieraddress;
    this.grandtotal = purchasereceiptDTO.grandtotal;
    this.status = purchasereceiptDTO.status;
    this.insertUser = purchasereceiptDTO.insertUser;
    this.insertDatetime = purchasereceiptDTO.insertDatetime;
    this.updatedUser = purchasereceiptDTO.updatedUser;
    this.updatedDatetime = purchasereceiptDTO.updatedDatetime;
}
}
