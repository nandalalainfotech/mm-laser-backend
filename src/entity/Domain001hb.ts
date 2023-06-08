import { DomainDTO } from "../dto/Domain.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("domain001hb", { schema: "erpnextgeneration5" })
export class Domain001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "domainId" })
  domainId: number;

  @Column("varchar", { name: "domainname", nullable: true, length: 255 })
  domainname: string | null;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("varchar", { name: "insert_user", nullable: true, length: 40 })
  insertUser: string | null;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;


  setProperties(domainDTO: DomainDTO) {
    this.domainId = domainDTO.domainId;
    this.domainname = domainDTO.domainname;
    this.description = domainDTO.description;
    this.insertUser = domainDTO.insertUser;
    this.insertDatetime = domainDTO.insertDatetime;
    this.updatedUser = domainDTO.updatedUser;
    this.updatedDatetime = domainDTO.updatedDatetime;
}
}
