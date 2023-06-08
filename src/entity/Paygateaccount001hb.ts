import { PaygateaccountDTO } from "../dto/Paygateaccount.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("paygateaccount001hb", { schema: "erpnextgeneration5" })
export class Paygateaccount001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "paygateId" })
  paygateId: number;

  @Column("varchar", { name: "accountName", length: 50 })
  accountName: string;

  @Column("varchar", { name: "defMessage", nullable: true, length: 100 })
  defMessage: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(paygateaccountDTO: PaygateaccountDTO) {
    this.paygateId = paygateaccountDTO.paygateId;
    this.accountName = paygateaccountDTO.accountName;
    this.defMessage = paygateaccountDTO.defMessage;
    this.insertUser = paygateaccountDTO.insertUser;
    this.insertDatetime = paygateaccountDTO.insertDatetime;
    this.updatedUser = paygateaccountDTO.updatedUser;
    this.updatedDatetime = paygateaccountDTO.updatedDatetime;
}
}
