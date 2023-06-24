import { User001mb } from "../entity/User001mb";
import { BaseDTO } from "./Base.dto";
import { ApplanguagesettingDTO } from "./Applanguagesetting.dto";

export class UserDTO extends BaseDTO {
    personId: number;
    // domain: string;
    username: string;
    password: string;
    status: string;
    email: string;
    securityquestion: string;
    securityanswer: string;
    theme: string | null;
    lastname: string | null;
    firstname: string | null;
    language: number | null;
    language2 : ApplanguagesettingDTO;
   

    setProperties(user001mb: User001mb) {
        this.personId = user001mb.personId;
        // this.domain = user001mb.domain;
        this.username = user001mb.username;
        this.firstname = user001mb.firstname;
        this.lastname = user001mb.lastname;
        this.language = user001mb.language;
        this.password = user001mb.password;
        this.status = user001mb.status;
        this.email = user001mb.email;
        this.language2 = user001mb.language2;
        this.securityquestion = user001mb.securityquestion;
        this.securityanswer = user001mb.securityanswer;
        this.theme = user001mb.theme;
        this.insertUser = user001mb.insertUser;
        this.insertDatetime = user001mb.insertDatetime;
        this.updatedUser = user001mb.updatedUser;
        this.updatedDatetime = user001mb.updatedDatetime;
    }
}
