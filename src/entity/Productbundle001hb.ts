import { ProductbundleDTO } from "../dto/Productbundle.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("productbundle001hb", { schema: "erpnextgeneration5" })
export class Productbundle001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("varchar", { name: "item", nullable: true, length: 255 })
  item: string | null;

  @Column("varchar", { name: "parentitem", nullable: true, length: 255 })
  parentitem: string | null;

  @Column("int", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;


  setProperties(productbundleDTO: ProductbundleDTO) {
    this.id = productbundleDTO.id;
    this.description = productbundleDTO.description;
    this.item = productbundleDTO.item;
    this.parentitem = productbundleDTO.parentitem;
    this.quantity = productbundleDTO.quantity;
    this.insertUser = productbundleDTO.insertUser;
    this.insertDatetime = productbundleDTO.insertDatetime;
    this.updatedUser = productbundleDTO.updatedUser;
    this.updatedDatetime = productbundleDTO.updatedDatetime;
}
}
