import { ItempriceDTO } from "../dto/Itemprice.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("itemprice001hb", { schema: "erpnextgeneration5" })
export class Itemprice001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "ipId" })
  ipId: number;

  @Column("varchar", { name: "itemCode", length: 50 })
  itemCode: string;

  @Column("varchar", { name: "status", length: 40 })
  status: string;

  @Column("varchar", { name: "itemGroup", length: 50 })
  itemGroup: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(itempriceDTO: ItempriceDTO) {
    this.ipId = itempriceDTO.ipId;
    this.itemCode = itempriceDTO.itemCode;
    this.status = itempriceDTO.status;
    this.itemGroup = itempriceDTO.itemGroup;
    this.insertUser = itempriceDTO.insertUser;
    this.insertDatetime = itempriceDTO.insertDatetime;
    this.updatedUser = itempriceDTO.updatedUser;
    this.updatedDatetime = itempriceDTO.updatedDatetime;
}
}
