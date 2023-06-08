import { IsAlpha, IsBoolean, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Manufactureset001mb } from "../entity/Manufactureset001mb";
import { BaseDTO } from "./Base.dto";

export class ManufacturesetDTO extends BaseDTO {

	mansetId: number;


	disableCPandTt: string;


	allowOt: string;


	allowProdinholy: string;

	@IsNotEmpty()
	prodPercent: string;

	@IsNotEmpty()
	backflushRm: number;

	@IsNotEmpty()
	capacityPlan: number;

	@IsNotEmpty()
	timebwOpern: string | null;

	@IsNotEmpty()
	defworkinProgWh: string;

	@IsNotEmpty()
	defFingoodsWh: string;

	setProperties(manufactureset001mb: Manufactureset001mb) {
		this.mansetId = manufactureset001mb.mansetId;
		this.disableCPandTt = manufactureset001mb.disableCPandTt;
		this.allowOt = manufactureset001mb.allowOt;
		this.allowProdinholy = manufactureset001mb.allowProdinholy;
		this.prodPercent = manufactureset001mb.prodPercent;
		this.backflushRm = manufactureset001mb.backflushRm;
		this.capacityPlan = manufactureset001mb.capacityPlan;
		this.timebwOpern = manufactureset001mb.timebwOpern;
		this.defworkinProgWh = manufactureset001mb.defworkinProgWh;
		this.defFingoodsWh = manufactureset001mb.defFingoodsWh;
		this.insertUser = manufactureset001mb.insertUser;
        this.insertDatetime = manufactureset001mb.insertDatetime;
        this.updatedUser = manufactureset001mb.updatedUser;
        this.updatedDatetime = manufactureset001mb.updatedDatetime;
	}
}
