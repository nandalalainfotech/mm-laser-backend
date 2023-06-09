import { AssetDTO } from "../dto/Asset.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("asset001hb", { schema: "erpnextgeneration5" })
export class Asset001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "asset", length: 45 })
  asset: string;

  @Column("int", { name: "purchaseamount", unsigned: true })
  purchaseamount: number;

  @Column("int", { name: "depreciationamount", unsigned: true })
  depreciationamount: number;

  @Column("int", { name: "accumulateddepreciationamount", unsigned: true })
  accumulateddepreciationamount: number;

  @Column("int", { name: "amountafterdepreciation", unsigned: true })
  amountafterdepreciation: number;

  @Column("varchar", { name: "depreciationentry", length: 45 })
  depreciationentry: string;

  @Column("varchar", { name: "assetcategory", length: 45 })
  assetcategory: string;

  @Column("varchar", { name: "currentstatus", length: 45 })
  currentstatus: string;

  @Column("varchar", { name: "depreciationmethod", length: 45 })
  depreciationmethod: string;

  @Column("datetime", { name: "depreciationdate" })
  depreciationdate: Date;

  @Column("datetime", { name: "purchasedate" })
  purchasedate: Date;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(assetDTO: AssetDTO) {
    this.id = assetDTO.id;
    this.asset = assetDTO.asset;
    this.depreciationdate = assetDTO.depreciationdate;
    this.purchaseamount = assetDTO.purchaseamount;
    this.depreciationamount = assetDTO.depreciationamount;
    this.accumulateddepreciationamount = assetDTO.accumulateddepreciationamount;
    this.amountafterdepreciation = assetDTO.amountafterdepreciation;
    this.depreciationentry = assetDTO.depreciationentry;
    this.assetcategory = assetDTO.assetcategory;
    this.currentstatus = assetDTO.currentstatus;
    this.depreciationmethod = assetDTO.depreciationmethod;
    this.purchasedate = assetDTO.purchasedate;
    this.insertUser = assetDTO.insertUser;
    this.insertDatetime = assetDTO.insertDatetime;
    this.updatedUser = assetDTO.updatedUser;
    this.updatedDatetime = assetDTO.updatedDatetime;
}
}
