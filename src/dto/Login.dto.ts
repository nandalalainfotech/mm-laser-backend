import { IsNotEmpty } from "class-validator";
import { Login001mb } from "../entity/Login001mb";
import { BaseDTO } from "./Base.dto";

export class LoginDTO extends BaseDTO {
    loginId: number;

    @IsNotEmpty()
    comName: string | null;

    @IsNotEmpty()
    username: string | null;

    @IsNotEmpty()
    password: number | null;

    @IsNotEmpty()
    domain: string | null;

    setProperties(login001mb: Login001mb) {
        this.loginId = login001mb.loginId;
        this.username = login001mb.username;
        this.password = login001mb.password;
        this.domain = login001mb.domain;
        this.insertUser = login001mb.insertUser;
        this.insertDatetime = login001mb.insertDatetime;
        this.updatedUser = login001mb.updatedUser;
        this.updatedDatetime = login001mb.updatedDatetime;
    }
}
