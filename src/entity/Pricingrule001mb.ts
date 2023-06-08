import { PricingruleDTO } from "../dto/Pricingrule.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pricingrule001mb", { schema: "erpnextgeneration5" })
export class Pricingrule001mb {
  @PrimaryGeneratedColumn({ type: "int", name: "priceruleid" })
  priceruleid: number;

  @Column("varchar", { name: "priceTitle", nullable: true, length: 50 })
  priceTitle: string | null;

  @Column("varchar", { name: "itemCode", nullable: true, length: 50 })
  itemCode: string | null;

  @Column("varchar", { name: "minQty", nullable: true, length: 20 })
  minQty: string | null;

  @Column("varchar", { name: "maxQty", nullable: true, length: 30 })
  maxQty: string | null;

  @Column("varchar", { name: "company", nullable: true, length: 50 })
  company: string | null;

  @Column("varchar", { name: "prordisc", nullable: true, length: 50 })
  prordisc: string | null;

  @Column("varchar", { name: "discprlist", nullable: true, length: 50 })
  discprlist: string | null;

  @Column("varchar", { name: "forprlist", nullable: true, length: 50 })
  forprlist: string | null;

  @Column("tinyint", { name: "selling", nullable: true, width: 1 })
  selling: boolean | null;

  @Column("tinyint", { name: "buying", nullable: true, width: 1 })
  buying: boolean | null;

  @Column("datetime", { name: "validFrom", nullable: true })
  validFrom: Date | null;

  @Column("datetime", { name: "validUpto", nullable: true })
  validUpto: Date | null;

  @Column("varchar", { name: "insert_user", nullable: true, length: 40 })
  insertUser: string | null;

  @Column("datetime", { name: "insert_datetime", nullable: true })
  insertDatetime: Date | null;

  @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
  updatedUser: string | null;

  @Column("datetime", { name: "updated_datetime", nullable: true })
  updatedDatetime: Date | null;


  setProperties(pricingruleDTO: PricingruleDTO) {
    this.priceruleid = pricingruleDTO.priceruleid;
    this.priceTitle = pricingruleDTO.priceTitle;
    this.itemCode = pricingruleDTO.itemCode;
    this.selling = pricingruleDTO.selling;
    this.buying = pricingruleDTO.buying;
    this.minQty = pricingruleDTO.minQty;
    this.maxQty = pricingruleDTO.maxQty;
    this.validFrom = pricingruleDTO.validFrom;
    this.company = pricingruleDTO.company;
    this.validUpto = pricingruleDTO.validUpto;
    this.prordisc = pricingruleDTO.prordisc;
    this.discprlist = pricingruleDTO.discprlist;
    this.forprlist = pricingruleDTO.forprlist;
    this.insertUser = pricingruleDTO.insertUser;
    this.insertDatetime = pricingruleDTO.insertDatetime;
    this.updatedUser = pricingruleDTO.updatedUser;
    this.updatedDatetime = pricingruleDTO.updatedDatetime;
}
}
