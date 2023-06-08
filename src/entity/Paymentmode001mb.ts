import { PaymentmodeDTO } from "../dto/Paymentmode.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("paymentmode001mb", { schema: "erpnextgeneration5" })
export class Paymentmode001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "payId" })
  payId: number;

  @Column("varchar", { name: "modeName", length: 60 })
  modeName: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(paymentmodeDTO: PaymentmodeDTO) {
    this.payId = paymentmodeDTO.payId;
    this.modeName = paymentmodeDTO.modeName;
    this.insertUser = paymentmodeDTO.insertUser;
    this.insertDatetime = paymentmodeDTO.insertDatetime;
    this.updatedUser = paymentmodeDTO.updatedUser;
    this.updatedDatetime = paymentmodeDTO.updatedDatetime;
}
}
