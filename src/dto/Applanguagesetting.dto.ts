import { IsNotEmpty } from "class-validator";
import { Applanguagesetting001mb } from "../entity/Applanguagesetting001mb";
import { BaseDTO } from "./Base.dto";

export class ApplanguagesettingDTO extends BaseDTO {

    id: number;

    @IsNotEmpty()
    name: string | null;

    @IsNotEmpty()
    description: string | null;

    @IsNotEmpty()
    status: string | null;

    setProperties(applanguagesetting001mb: Applanguagesetting001mb) {
        this.id = applanguagesetting001mb.id;
        this.name = applanguagesetting001mb.name;
        this.description = applanguagesetting001mb.description;
        this.status = applanguagesetting001mb.status;
        this.insertUser = applanguagesetting001mb.insertUser;
        this.insertDatetime = applanguagesetting001mb.insertDatetime;
        this.updatedUser = applanguagesetting001mb.updatedUser;
        this.updatedDatetime = applanguagesetting001mb.updatedDatetime;
    }
}
