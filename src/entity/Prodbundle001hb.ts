import { ProdbundleDTO } from "../dto/Prodbundle.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("prodbundle001hb", { schema: "erpnextgeneration5" })
export class Prodbundle001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "pbundId" })
  pbundId: number;

  @Column("varchar", { name: "itemCode", length: 50 })
  itemCode: string;

  @Column("varchar", { name: "childItem", length: 50 })
  childItem: string;

  @Column("varchar", { name: "quantity", length: 50 })
  quantity: string;

  @Column("varchar", { name: "description", length: 150 })
  description: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(prodbundleDTO: ProdbundleDTO) {
    this.pbundId = prodbundleDTO.pbundId;
    this.itemCode = prodbundleDTO.itemCode;
    this.childItem = prodbundleDTO.childItem;
    this.quantity = prodbundleDTO.quantity;
    this.description = prodbundleDTO.description;
    this.insertUser = prodbundleDTO.insertUser;
    this.insertDatetime = prodbundleDTO.insertDatetime;
    this.updatedUser = prodbundleDTO.updatedUser;
    this.updatedDatetime = prodbundleDTO.updatedDatetime;
}
}

