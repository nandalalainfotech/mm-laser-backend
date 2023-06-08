import { IsNotEmpty } from "class-validator";
import { Domain001mb } from "../entity/Domain001mb";
import { BaseDTO } from "./Base.dto";

export class DomainDTO extends BaseDTO {

    domainId: number;

    @IsNotEmpty()
    domainname: string;

    @IsNotEmpty()
    description: string;


    setProperties(domain001mb: Domain001mb) {
        this.domainId = domain001mb.domainId;
        this.domainname = domain001mb.domainname;
        this.description = domain001mb.description;
        this.insertUser = domain001mb.insertUser;
        this.insertDatetime = domain001mb.insertDatetime;
        this.updatedUser = domain001mb.updatedUser;
        this.updatedDatetime = domain001mb.updatedDatetime;
    }
}