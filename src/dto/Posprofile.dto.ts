import { IsNotEmpty } from "class-validator";
import { Posprofile001mb } from "../entity/Posprofile001mb";
import { BaseDTO } from "./Base.dto";

export class PosprofileDTO extends BaseDTO {

	profileId: number;

	@IsNotEmpty()
	appforUser: string;

	@IsNotEmpty()
	series: string;

	@IsNotEmpty()
	company: string;

	setProperties(posprofile001mb: Posprofile001mb) {
		this.profileId = posprofile001mb.profileId;
		this.appforUser = posprofile001mb.appforUser;
		this.series = posprofile001mb.series;
		this.company = posprofile001mb.company;
		this.insertUser = posprofile001mb.insertUser;
        this.insertDatetime = posprofile001mb.insertDatetime;
        this.updatedUser = posprofile001mb.updatedUser;
        this.updatedDatetime = posprofile001mb.updatedDatetime;
	}
}
