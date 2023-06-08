import { Applicationlogosettings001mb } from "../entity/Applicationlogosettings001mb";
import { BaseDTO } from "./Base.dto";

export class ApplicationlogosettingsDTO extends BaseDTO {

    registerid: number;

    // @IsNotEmpty()
    clientname: string;

    // @IsNotEmpty()
    clientdescription: string;

    // @IsNotEmpty()
    category: string | null;


    // @IsNotEmpty()
    filename: string | null;

    // @IsNotEmpty()
    loginuser: string | null;

    // @IsNotEmpty()
    originalfilename: string | null;

    setProperties(applicationlogoSettings001: Applicationlogosettings001mb) {
        this.registerid = applicationlogoSettings001.registerid;
        this.clientname = applicationlogoSettings001.clientname;
        this.clientdescription = applicationlogoSettings001.clientdescription;
        this.category = applicationlogoSettings001.category;
        this.filename = applicationlogoSettings001.filename;
        this.loginuser = applicationlogoSettings001.loginuser;
        this.originalfilename = applicationlogoSettings001.originalfilename;
        this.insertUser = applicationlogoSettings001.insertUser;
        this.insertDatetime = applicationlogoSettings001.insertDatetime;
        this.updatedUser = applicationlogoSettings001.updatedUser;
        this.updatedDatetime = applicationlogoSettings001.updatedDatetime;
    }

}
