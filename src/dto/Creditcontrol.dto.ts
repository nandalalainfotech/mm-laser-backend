import { IsNotEmpty } from "class-validator";
import { Creditcontrol001mb } from "../entity/Creditcontrol001mb";
import { BaseDTO } from "./Base.dto";

export class CreditcontrolDTO extends BaseDTO{

	credId: number;

	@IsNotEmpty()
	creditName: string;
	
	setProperties(creditcontrol001mb: Creditcontrol001mb) {
		this.credId = creditcontrol001mb.credId;
		this.creditName = creditcontrol001mb.creditName;
		this.insertUser = creditcontrol001mb.insertUser;
        this.insertDatetime = creditcontrol001mb.insertDatetime;
        this.updatedUser = creditcontrol001mb.updatedUser;
        this.updatedDatetime = creditcontrol001mb.updatedDatetime;
	}
}
