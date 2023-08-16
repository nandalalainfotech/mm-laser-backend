import { IsNotEmpty } from "class-validator";
import { Regionmaster001mb } from "src/entity/Regionmaster001mb";
import { BaseDTO } from "./Base.dto";

export class RegionmasterDTO extends BaseDTO {
    slNo: number;

    @IsNotEmpty()
    region: string | null;

    @IsNotEmpty()
    validity: Date;

    @IsNotEmpty()
    status: boolean;

    setProperties(regionmaster001mb: Regionmaster001mb) {
        this.slNo = regionmaster001mb.slNo;
        this.region = regionmaster001mb.region;
        this.validity = regionmaster001mb.validity;
        this.insertUser = regionmaster001mb.insertUser;
        this.insertDatetime = regionmaster001mb.insertDatetime;
        this.updatedUser = regionmaster001mb.updatedUser;
        this.updatedDatetime = regionmaster001mb.updatedDatetime;
    }
}
