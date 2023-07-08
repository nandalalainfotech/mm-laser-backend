import { IsNotEmpty } from "class-validator";
import { Bookingentry001mb } from "src/entity/Bookingentry001mb";
import { BaseDTO } from "./Base.dto";

export class BookingentryDTO extends BaseDTO {

    bookingId: number;

    @IsNotEmpty()
    mslno: number;

    @IsNotEmpty()
    dslno: number;

    @IsNotEmpty()
    date: Date;

    @IsNotEmpty()
    staff: string;
    
    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    hospital: string;

    @IsNotEmpty()
    time: string;

    @IsNotEmpty()
    appNo: string;

    setProperties(bookingentry001mb: Bookingentry001mb) {
        this.bookingId = bookingentry001mb.bookingId;
        this.mslno = bookingentry001mb.mslno;
        this.dslno = bookingentry001mb.dslno;
        this.staff = bookingentry001mb.staff;
        this.status = bookingentry001mb.status;
        this.date = bookingentry001mb.date;
        this.appNo = bookingentry001mb.appNo;
        this.time = bookingentry001mb.time;
        this.hospital = bookingentry001mb.hospital;
        this.insertUser = bookingentry001mb.insertUser;
        this.insertDatetime = bookingentry001mb.insertDatetime;
        this.updatedUser = bookingentry001mb.updatedUser;
        this.updatedDatetime = bookingentry001mb.updatedDatetime;
    }
}
