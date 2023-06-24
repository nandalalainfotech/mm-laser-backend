import { IsNotEmpty } from "class-validator";
import { Casemachine001wb } from "src/entity/Casemachine001wb";
import { BaseDTO } from "./Base.dto";

export class CasemachineDTO extends BaseDTO {

    slno: number;

    cslno: number | any;

    mname: string;

    numofcase: string;

    setProperties(casemachine001wb: Casemachine001wb) {
        this.slno = casemachine001wb.slno;
        this.cslno = casemachine001wb.cslno;
        this.mname = casemachine001wb.mname;
        this.numofcase = casemachine001wb.numofcase;
        this.insertUser = casemachine001wb.insertUser;
        this.insertDatetime = casemachine001wb.insertDatetime;
        this.updatedUser = casemachine001wb.updatedUser;
        this.updatedDatetime = casemachine001wb.updatedDatetime;
    }
}
