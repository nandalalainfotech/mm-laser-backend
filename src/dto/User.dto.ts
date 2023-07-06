import { User001mb } from "../entity/User001mb";
import { BaseDTO } from "./Base.dto";

export class UserDTO extends BaseDTO {
    personId: number;
    username: string;
    password: string;
    status: string;
    email: string;
    rolename: string;
    mobileno: string;
    theme: string | null;
    lastname: string | null;
    firstname: string | null;

    setProperties(user001mb: User001mb) {
        this.personId = user001mb.personId;
        this.username = user001mb.username;
        this.firstname = user001mb.firstname;
        this.lastname = user001mb.lastname;
        this.rolename = user001mb.rolename;
        this.password = user001mb.password;
        this.status = user001mb.status;
        this.email = user001mb.email;
        this.mobileno = user001mb.mobileno;
        this.theme = user001mb.theme;
        this.insertUser = user001mb.insertUser;
        this.insertDatetime = user001mb.insertDatetime;
        this.updatedUser = user001mb.updatedUser;
        this.updatedDatetime = user001mb.updatedDatetime;
    }
}
