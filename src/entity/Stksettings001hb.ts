import { StksettingsDTO } from "../dto/Stksettings.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("stksettings001hb", { schema: "erpnextgeneration5" })
export class Stksettings001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "setId" })
  setId: number;

  @Column("varchar", { name: "itemnameBy", length: 30 })
  itemnameBy: string;

  @Column("varchar", { name: "itemGroup", length: 50 })
  itemGroup: string;

  @Column("decimal", {
    name: "allowancePercent",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  allowancePercent: string | null;

  @Column("varchar", { name: "defaultUOM", length: 20 })
  defaultUom: string;

  @Column("varchar", { name: "warehouseName", length: 50 })
  warehouseName: string;

  @Column("char", { name: "showbarcodeField", length: 1 })
  showbarcodeField: string;

  @Column("char", { name: "autoinsertPricelist", length: 1 })
  autoinsertPricelist: string;

  @Column("char", { name: "autosetSerialno", length: 1 })
  autosetSerialno: string;

  @Column("char", { name: "allownegativeStock", length: 1 })
  allownegativeStock: string;

  @Column("varchar", { name: "defaultValue", length: 255 })
  defaultValue: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(stksettingsDTO: StksettingsDTO) {
    this.setId = stksettingsDTO.setId;
    this.itemnameBy = stksettingsDTO.itemnameBy;
    this.defaultValue = stksettingsDTO.defaultValue;
    this.itemGroup = stksettingsDTO.itemGroup;
    this.allowancePercent = stksettingsDTO.allowancePercent;
    this.defaultUom = stksettingsDTO.defaultUom;
    this.warehouseName = stksettingsDTO.warehouseName;
    this.showbarcodeField = stksettingsDTO.showbarcodeField;
    this.autoinsertPricelist = stksettingsDTO.autoinsertPricelist;
    this.autosetSerialno = stksettingsDTO.autosetSerialno;
    this.allownegativeStock = stksettingsDTO.allownegativeStock;
    this.insertUser = stksettingsDTO.insertUser;
    this.insertDatetime = stksettingsDTO.insertDatetime;
    this.updatedUser = stksettingsDTO.updatedUser;
    this.updatedDatetime = stksettingsDTO.updatedDatetime;
}
}
