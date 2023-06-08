import { PurchaseDTO } from "../dto/Purchase.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("purchase001mb", { schema: "erpnextgeneration5" })
export class Purchase001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("datetime", { name: "Date", nullable: true })
  date: Date | null;

  @Column("int", { name: "grandtotal", nullable: true })
  grandtotal: number | null;

  @Column("varchar", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("varchar", { name: "supplier", nullable: true, length: 255 })
  supplier: string | null;

  @Column("varchar", { name: "supplieraddress", nullable: true, length: 255 })
  supplieraddress: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(purchaseDTO: PurchaseDTO) {
    this.id = purchaseDTO.id;
    this.date = purchaseDTO.date;
    this.grandtotal = purchaseDTO.grandtotal;
    this.status = purchaseDTO.status;
    this.supplier = purchaseDTO.supplier;
    this.supplieraddress = purchaseDTO.supplieraddress;
    this.insertUser = purchaseDTO.insertUser;
    this.insertDatetime = purchaseDTO.insertDatetime;
    this.updatedUser = purchaseDTO.updatedUser;
    this.updatedDatetime = purchaseDTO.updatedDatetime;
}
}
