import { PrmatreqDTO } from "../dto/Prmatreq.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("prmatreq001mb", { schema: "erpnextgeneration5" })
export class Prmatreq001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "pmrId" })
  pmrId: number;

  @Column("varchar", { name: "mrType", length: 30 })
  mrType: string;

  @Column("varchar", { name: "mrSeries", length: 40 })
  mrSeries: string;

  @Column("varchar", { name: "itemCode", length: 40 })
  itemCode: string;

  @Column("varchar", { name: "quantity", length: 20 })
  quantity: string;

  @Column("varchar", { name: "forWarehouse", length: 40 })
  forWarehouse: string;

  @Column("datetime", { name: "requiredDate" })
  requiredDate: Date;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(prmatreqDTO: PrmatreqDTO) {
    this.pmrId = prmatreqDTO.pmrId;
    this.mrType = prmatreqDTO.mrType;
    this.mrSeries = prmatreqDTO.mrSeries;
    this.itemCode = prmatreqDTO.itemCode;
    this.quantity = prmatreqDTO.quantity;
    this.forWarehouse = prmatreqDTO.forWarehouse;
    this.requiredDate = prmatreqDTO.requiredDate;
    this.insertUser = prmatreqDTO.insertUser;
    this.insertDatetime = prmatreqDTO.insertDatetime;
    this.updatedUser = prmatreqDTO.updatedUser;
    this.updatedDatetime = prmatreqDTO.updatedDatetime;
}
}
