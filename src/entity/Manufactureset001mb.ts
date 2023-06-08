import { ManufacturesetDTO } from "../dto/Manufactureset.dto";
import { MaterialrequestDTO } from "../dto/Materialrequest.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("manufactureset001mb", { schema: "erpnextgeneration5" })
export class Manufactureset001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "mansetId" })
  mansetId: number;

  @Column("decimal", { name: "prodPercent", precision: 12, scale: 4 })
  prodPercent: string;

  @Column("int", { name: "backflushRM" })
  backflushRm: number;

  @Column("int", { name: "capacityPlan" })
  capacityPlan: number;

  @Column("varchar", { name: "timebwOpern", nullable: true, length: 30 })
  timebwOpern: string | null;

  @Column("varchar", { name: "defworkinProgWH", length: 50 })
  defworkinProgWh: string;

  @Column("varchar", { name: "defFingoodsWH", length: 50 })
  defFingoodsWh: string;

  @Column("char", { name: "disableCPandTT", length: 20 })
  disableCPandTt: string;

  @Column("char", { name: "allowOT", length: 20 })
  allowOt: string;

  @Column("char", { name: "allowProdinholy", length: 20 })
  allowProdinholy: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(manufacturesetDTO: ManufacturesetDTO) {
    this.mansetId = manufacturesetDTO.mansetId;
    this.disableCPandTt = manufacturesetDTO.disableCPandTt;
    this.allowOt = manufacturesetDTO.allowOt;
    this.allowProdinholy = manufacturesetDTO.allowProdinholy;
    this.prodPercent = manufacturesetDTO.prodPercent;
    this.backflushRm = manufacturesetDTO.backflushRm;
    this.capacityPlan = manufacturesetDTO.capacityPlan;
    this.timebwOpern = manufacturesetDTO.timebwOpern;
    this.defworkinProgWh = manufacturesetDTO.defworkinProgWh;
    this.defFingoodsWh = manufacturesetDTO.defFingoodsWh;
    this.insertUser = manufacturesetDTO.insertUser;
    this.insertDatetime = manufacturesetDTO.insertDatetime;
    this.updatedUser = manufacturesetDTO.updatedUser;
    this.updatedDatetime = manufacturesetDTO.updatedDatetime;
}
}
