import { AccountchartDTO } from "../dto/Accountchart.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("accountchart001mb", { schema: "erpnextgeneration5" })
export class Accountchart001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "chartId" })
  chartId: number;

  @Column("varchar", { name: "chartName", length: 100 })
  chartName: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(accountchartDTO: AccountchartDTO) {
    this.chartId = accountchartDTO.chartId;
    this.chartName = accountchartDTO.chartName;
    this.insertUser = accountchartDTO.insertUser;
    this.insertDatetime = accountchartDTO.insertDatetime;
    this.updatedUser = accountchartDTO.updatedUser;
    this.updatedDatetime = accountchartDTO.updatedDatetime;
}
}
