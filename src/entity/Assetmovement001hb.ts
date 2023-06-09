import { AssetmovementDTO } from "../dto/Assetmovement.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("assetmovement001hb", { schema: "erpnextgeneration5" })
export class Assetmovement001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "asset", nullable: true, length: 255 })
  asset: string | null;

  @Column("varchar", { name: "company", nullable: true, length: 255 })
  company: string | null;

  @Column("varchar", { name: "targetwarehouse", nullable: true, length: 255 })
  targetwarehouse: string | null;

  @Column("datetime", { name: "transactiondate", nullable: true })
  transactiondate: Date | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  
  setProperties(assetmovementDTO: AssetmovementDTO) {
    this.id = assetmovementDTO.id;
    this.asset = assetmovementDTO.asset;
    this.company = assetmovementDTO.company;
    this.targetwarehouse = assetmovementDTO.targetwarehouse;
    this.transactiondate = assetmovementDTO.transactiondate;
    this.insertUser = assetmovementDTO.insertUser;
    this.insertDatetime = assetmovementDTO.insertDatetime;
    this.updatedUser = assetmovementDTO.updatedUser;
    this.updatedDatetime = assetmovementDTO.updatedDatetime;
}
}
