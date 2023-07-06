import { IsNotEmpty } from "class-validator";
import { Caseentry001mb } from "src/entity/Caseentry001mb";
import { BaseDTO } from "./Base.dto";
import { Casemachine001wb } from "src/entity/Casemachine001wb";

export class CaseentryDTO extends BaseDTO {

    caseentryId: number;

    @IsNotEmpty()
    doctorname: number;

    @IsNotEmpty()
    hospname: string;

    status: boolean;

    appointmentNo: number;

    Casemachine001wbs?: Casemachine001wb[];

    setProperties(caseentry001mb: Caseentry001mb) {
        this.caseentryId = caseentry001mb.caseentryId;
        this.doctorname = caseentry001mb.doctorname;
        this.hospname = caseentry001mb.hospname;
        this.status = caseentry001mb.status;
        this.appointmentNo = caseentry001mb.appointmentNo
        this.insertUser = caseentry001mb.insertUser;
        this.insertDatetime = caseentry001mb.insertDatetime;
        this.updatedUser = caseentry001mb.updatedUser;
        this.updatedDatetime = caseentry001mb.updatedDatetime;
    }
}
