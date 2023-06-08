import { IsNotEmpty } from "class-validator";
import { Stksettings001mb } from "../entity/Stksettings001mb";
import { BaseDTO } from "./Base.dto";

export class StksettingsDTO extends BaseDTO {

	setId: number;

	@IsNotEmpty()
	itemnameBy: string;

	@IsNotEmpty()
	defaultValue: string;

	@IsNotEmpty()
	itemGroup: string;

	@IsNotEmpty()
	allowancePercent: string | null;

	@IsNotEmpty()
	defaultUom: string;

	@IsNotEmpty()
	warehouseName: string;


	showbarcodeField: string;


	autoinsertPricelist: string;


	autosetSerialno: string;


	allownegativeStock: string;

	setProperties(stksettings001mb: Stksettings001mb) {
		this.setId = stksettings001mb.setId;
		this.itemnameBy = stksettings001mb.itemnameBy;
		this.defaultValue = stksettings001mb.defaultValue;
		this.itemGroup = stksettings001mb.itemGroup;
		this.allowancePercent = stksettings001mb.allowancePercent;
		this.defaultUom = stksettings001mb.defaultUom;
		this.warehouseName = stksettings001mb.warehouseName;
		this.showbarcodeField = stksettings001mb.showbarcodeField;
		this.autoinsertPricelist = stksettings001mb.autoinsertPricelist;
		this.autosetSerialno = stksettings001mb.autosetSerialno;
		this.allownegativeStock = stksettings001mb.allownegativeStock;
		this.insertUser = stksettings001mb.insertUser;
        this.insertDatetime = stksettings001mb.insertDatetime;
        this.updatedUser = stksettings001mb.updatedUser;
        this.updatedDatetime = stksettings001mb.updatedDatetime;
	}
}
