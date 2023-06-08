import { CrmspcontactDTO } from "../dto/Crmspcontact.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("crmspcontact001mb", { schema: "erpnextgeneration5" })
export class Crmspcontact001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "contId" })
  contId: number;

  @Column("varchar", { name: "leadName", length: 50 })
  leadName: string;

  @Column("varchar", { name: "status", nullable: true, length: 40 })
  status: string | null;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(crmspcontactDTO: CrmspcontactDTO) {
    this.contId = crmspcontactDTO.contId;
    this.leadName = crmspcontactDTO.leadName;
    this.status = crmspcontactDTO.status;
    this.insertUser = crmspcontactDTO.insertUser;
    this.insertDatetime = crmspcontactDTO.insertDatetime;
    this.updatedUser = crmspcontactDTO.updatedUser;
    this.updatedDatetime = crmspcontactDTO.updatedDatetime;
}
}
