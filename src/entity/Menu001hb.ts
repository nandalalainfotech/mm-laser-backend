import { MenuDTO } from "../dto/Menu.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("menu001hb", { schema: "erpnextgeneration5" })
export class Menu001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "menuid" })
  menuid: number;

  @Column("varchar", { name: "menuname", length: 25 })
  menuname: string;

  @Column("varchar", { name: "menulink", nullable: true, length: 75 })
  menulink: string | null;

  @Column("enum", {
    name: "menutype",
    nullable: true,
    enum: ["Main-Menu", "Child-Menu", "Page-Main-Menu", "Page-Child-Menu"],
  })
  menutype:
    | "Main-Menu"
    | "Child-Menu"
    | "Page-Main-Menu"
    | "Page-Child-Menu"
    | null;

  @Column("int", { name: "parentid", nullable: true, default: () => "'0'" })
  parentid: number | null;

  @Column("varchar", { name: "parentname", nullable: true, length: 25 })
  parentname: string | null;

  @Column("varchar", { name: "domain", length: 25 })
  domain: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  setProperties(menuDTO: MenuDTO) {
    this.menuid = menuDTO.menuid;
    this.menuname = menuDTO.menuname;
    this.menulink = menuDTO.menulink;
    this.parentid = menuDTO.parentid;
    this.parentname = menuDTO.parentname;
    this.domain = menuDTO.domain;
    this.insertUser = menuDTO.insertUser;
    this.insertDatetime = menuDTO.insertDatetime;
    this.updatedUser = menuDTO.updatedUser;
    this.updatedDatetime = menuDTO.updatedDatetime;
}
}
