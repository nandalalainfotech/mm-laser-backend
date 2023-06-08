import { ItemgroupDTO } from "../dto/Itemgroup.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("itemgroup001mb", { schema: "erpnextgeneration5" })
export class Itemgroup001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "igId" })
  igId: number;

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

  
  setProperties(itemgroupDTO: ItemgroupDTO) {
    this.igId = itemgroupDTO.igId;
    this.itemGroup = itemgroupDTO.itemGroup;
    this.insertUser = itemgroupDTO.insertUser;
    this.insertDatetime = itemgroupDTO.insertDatetime;
    this.updatedUser = itemgroupDTO.updatedUser;
    this.updatedDatetime = itemgroupDTO.updatedDatetime;
}
}
