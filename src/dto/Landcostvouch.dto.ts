import { IsNotEmpty } from "class-validator";
import { Landcostvouch001mb } from "../entity/Landcostvouch001mb";
import { BaseDTO } from "./Base.dto";

export class LandcostvouchDTO extends BaseDTO {

	vouchId: number;

	@IsNotEmpty()
	series: string;

	@IsNotEmpty()
	company: string;

	@IsNotEmpty()
	recptdocType: string;

	@IsNotEmpty()
	recptdoc: string;

	@IsNotEmpty()
	supName: string;

	@IsNotEmpty()
	grandTotal: number;

	setProperties(landcostvouch001mb: Landcostvouch001mb) {
		this.vouchId = landcostvouch001mb.vouchId;
		this.series = landcostvouch001mb.series;
		this.company = landcostvouch001mb.company;
		this.recptdocType = landcostvouch001mb.recptdocType;
		this.recptdoc = landcostvouch001mb.recptdoc;
		this.supName = landcostvouch001mb.supName;
		this.grandTotal = landcostvouch001mb.grandTotal;
		this.insertUser = landcostvouch001mb.insertUser;
        this.insertDatetime = landcostvouch001mb.insertDatetime;
        this.updatedUser = landcostvouch001mb.updatedUser;
        this.updatedDatetime = landcostvouch001mb.updatedDatetime;
	}
}
