import { RequestitembuyDTO } from "../dto/Requestitembuy.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("requestitembuy001hb", { schema: "erpnextgeneration5" })
export class Requestitembuy001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "riId" })
  riId: number;

  @Column("varchar", { name: "itemCode", length: 40 })
  itemCode: string;

  @Column("varchar", { name: "warehouse", length: 40 })
  warehouse: string;

  @Column("int", { name: "actual" })
  actual: number;

  @Column("int", { name: "requested", nullable: true })
  requested: number | null;

  @Column("int", { name: "reserved", nullable: true })
  reserved: number | null;

  @Column("int", { name: "ordered", nullable: true })
  ordered: number | null;

  @Column("int", { name: "projected", nullable: true })
  projected: number | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(requestitembuyDTO: RequestitembuyDTO) {
    this.riId = requestitembuyDTO.riId;
    this.itemCode = requestitembuyDTO.itemCode;
    this.warehouse = requestitembuyDTO.warehouse;
    this.actual = requestitembuyDTO.actual;
    this.requested = requestitembuyDTO.requested;
    this.reserved = requestitembuyDTO.reserved;
    this.ordered = requestitembuyDTO.ordered;
    this.projected = requestitembuyDTO.projected;
    this.insertUser = requestitembuyDTO.insertUser;
    this.insertDatetime = requestitembuyDTO.insertDatetime;
    this.updatedUser = requestitembuyDTO.updatedUser;
    this.updatedDatetime = requestitembuyDTO.updatedDatetime;
}
}
