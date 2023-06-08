import { Applicationsetting001mb } from "../entity/Applicationsetting001mb";
import { BaseDTO } from "./Base.dto";

export class ApplicationsettingDTO extends BaseDTO {
appId: number;
property: string | null;
link: string | null;
loginUser: string | null;
status: string | null;
insertUser: string | null;
insertDatetime: Date | null;
updatedUser: string | null;
updatedDatetime: Date | null;

setProperties(applicationsetting001mb: Applicationsetting001mb) {
this.appId = applicationsetting001mb.appId;
this.property = applicationsetting001mb.property;
this.link = applicationsetting001mb.link;
this.loginUser = applicationsetting001mb.loginUser;
this.status = applicationsetting001mb.status;
this.insertUser = applicationsetting001mb.insertUser;
this.insertDatetime = applicationsetting001mb.insertDatetime;
this.updatedUser = applicationsetting001mb.updatedUser;
this.updatedDatetime = applicationsetting001mb.updatedDatetime;
}

}
