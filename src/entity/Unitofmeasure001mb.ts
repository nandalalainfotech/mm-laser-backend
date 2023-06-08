import { UnitofmeasureDTO } from "../dto/Unitofmeasure.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("unitofmeasure001mb", { schema: "erpnextgeneration5" })
export class Unitofmeasure001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "unitId" })
  unitId: number;

  @Column("varchar", { name: "unitName", length: 40 })
  unitName: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(unitofmeasureDTO: UnitofmeasureDTO) {
    this.unitId = unitofmeasureDTO.unitId;
    this.unitName = unitofmeasureDTO.unitName;
    this.insertUser = unitofmeasureDTO.insertUser;
    this.insertDatetime = unitofmeasureDTO.insertDatetime;
    this.updatedUser = unitofmeasureDTO.updatedUser;
    this.updatedDatetime = unitofmeasureDTO.updatedDatetime;
}
}
