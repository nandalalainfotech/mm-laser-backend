import { RoleDTO } from "../dto/Role.dto";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User001hb } from "./User001hb";

@Index("rlid", ["rlid"], {})
@Entity("role001hb", { schema: "erpnextgeneration5" })
export class Role001hb {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "rlid" })
  rlid: number;

  @Column("varchar", { name: "rolename", length: 40 })
  rolename: string;

  @Column("char", { name: "status", length: 1 })
  status: string;

  @Column("varchar", { name: "insert_user", length: 40 })
  insertUser: string;

  @Column("datetime", { name: "insert_datetime" })
  insertDatetime: Date;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;

  @JoinColumn([{ name: "rlid", referencedColumnName: "personId" }])
  rl: User001hb;

  setProperties(roleDTO: RoleDTO) {
    this.id = roleDTO.id;
    this.rlid = roleDTO.rlid;
    this.rolename = roleDTO.rolename;
    this.status = roleDTO.status;
    this.insertUser = roleDTO.insertUser;
    this.insertDatetime = roleDTO.insertDatetime;
    this.updatedUser = roleDTO.updatedUser;
    this.updatedDatetime = roleDTO.updatedDatetime;
  }
}
