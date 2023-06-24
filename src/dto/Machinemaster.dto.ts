import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "./Base.dto";
import { Machinemaster001mb } from "src/entity/Machinemaster001mb";

export class MachinemasterDTO extends BaseDTO {
    slNo: number;

    @IsNotEmpty()
    machinename: string | null;

    @IsNotEmpty()
    status: string;


    setProperties(machinemaster001mb: Machinemaster001mb) {
        this.slNo = machinemaster001mb.slNo;
        this.machinename = machinemaster001mb.machinename;
        this.status = machinemaster001mb.status;
        this.insertUser = machinemaster001mb.insertUser;
        this.insertDatetime = machinemaster001mb.insertDatetime;
        this.updatedUser = machinemaster001mb.updatedUser;
        this.updatedDatetime = machinemaster001mb.updatedDatetime;
    }
}
