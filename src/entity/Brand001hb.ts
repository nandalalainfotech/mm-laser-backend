import { BrandDTO } from "../dto/Brand.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("brand001hb", { schema: "erpnextgeneration5" })
export class Brand001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "brandId" })
  brandId: number;

  @Column("varchar", { name: "brandName", length: 30 })
  brandName: string;

  @Column("varchar", { name: "description", length: 100 })
  description: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(brandDTO: BrandDTO) {
    this.brandId = brandDTO.brandId;
    this.brandName = brandDTO.brandName;
    this.description = brandDTO.description;
    this.insertUser = brandDTO.insertUser;
    this.insertDatetime = brandDTO.insertDatetime;
    this.updatedUser = brandDTO.updatedUser;
    this.updatedDatetime = brandDTO.updatedDatetime;
}
}
