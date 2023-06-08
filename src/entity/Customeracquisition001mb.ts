import { CustomeracquisitionDTO } from "../dto/Customeracquisition.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("customeracquisition001mb", { schema: "erpnextgeneration5" })
export class Customeracquisition001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "month", length: 45 })
  month: string;

  @Column("int", { name: "newcustomers", unsigned: true })
  newcustomers: number;

  @Column("int", { name: "repeatcustomers", unsigned: true })
  repeatcustomers: number;

  @Column("int", { name: "total", unsigned: true })
  total: number;

  @Column("year", { name: "year" })
  year: number;

  @Column("int", { name: "newcustomersrevenue" })
  newcustomersrevenue: number;

  @Column("int", { name: "repeatcustomersrevenue" })
  repeatcustomersrevenue: number;

  @Column("int", { name: "totalrevenue" })
  totalrevenue: number;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(customeracquisitionDTO: CustomeracquisitionDTO) {
    this.id = customeracquisitionDTO.id;
    this.year = customeracquisitionDTO.year;
    this.month = customeracquisitionDTO.month;
    this.newcustomers = customeracquisitionDTO.newcustomers;
    this.repeatcustomers = customeracquisitionDTO.repeatcustomers;
    this.total = customeracquisitionDTO.total;
    this.newcustomersrevenue = customeracquisitionDTO.newcustomersrevenue;
    this.repeatcustomersrevenue = customeracquisitionDTO.repeatcustomersrevenue;
    this.totalrevenue = customeracquisitionDTO.totalrevenue;
    this.insertUser = customeracquisitionDTO.insertUser;
    this.insertDatetime = customeracquisitionDTO.insertDatetime;
    this.updatedUser = customeracquisitionDTO.updatedUser;
    this.updatedDatetime = customeracquisitionDTO.updatedDatetime;
}
}
