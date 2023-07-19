import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Caseentry001mb } from "./Caseentry001mb";
import { CasemachineDTO } from "src/dto/Casemachine.dto";

@Index("cslno", ["cslno"], {})
@Entity("casemachine001wb", { schema: "mmlaser" })
export class Casemachine001wb {
    @PrimaryGeneratedColumn({ type: "int", name: "slno" })
    slno: number;

    @Column("int", { name: "cslno", nullable: true })
    cslno: number | null;

    @Column("varchar", { name: "mname", length: 40 })
    mname: string;

    @Column("varchar", { name: "numofcase", length: 40 })
    numofcase: string;

    @Column("varchar", { name: "charge", length: 40 })
    charge: string;

    @Column("varchar", { name: "insert_user", length: 40 })
    insertUser: string;

    @Column("datetime", { name: "insert_datetime" })
    insertDatetime: Date;

    @Column("varchar", { name: "updated_user", nullable: true, length: 40 })
    updatedUser: string | null;

    @Column("datetime", { name: "updated_datetime", nullable: true })
    updatedDatetime: Date | null;

    @ManyToOne(
        () => Caseentry001mb,
        (caseentry001mb) => caseentry001mb.casemachine001wbs,
        { onDelete: "CASCADE", onUpdate: "RESTRICT" }
    )
    @JoinColumn([{ name: "cslno", referencedColumnName: "caseentryId" }])
    cslno2: Caseentry001mb;


    setProperties(casemachineDTO: CasemachineDTO) {
        this.slno = casemachineDTO.slno;
        this.numofcase = casemachineDTO.numofcase;
        this.cslno = casemachineDTO.cslno;
        this.mname = casemachineDTO.mname;
        this.charge = casemachineDTO.charge;
        this.insertUser = casemachineDTO.insertUser;
        this.insertDatetime = casemachineDTO.insertDatetime;
        this.updatedUser = casemachineDTO.updatedUser;
        this.updatedDatetime = casemachineDTO.updatedDatetime;
    }
}
