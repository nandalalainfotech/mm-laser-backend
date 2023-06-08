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
    hospital: string;

    @IsNotEmpty()
    days: string;

    @IsNotEmpty()
    starttime: string;

    @IsNotEmpty()
    endtime: string;

    setProperties(bookingentry001mb: Bookingentry001mb) {
        this.bookingId = bookingentry001mb.bookingId;
        this.mslno = bookingentry001mb.mslno;
        this.dslno = bookingentry001mb.dslno;
        this.staff = bookingentry001mb.staff;
        this.days = bookingentry001mb.days;
        this.date = bookingentry001mb.date;
        this.starttime = bookingentry001mb.starttime;
        this.endtime = bookingentry001mb.endtime;
        this.hospital = bookingentry001mb.hospital;
        this.insertUser = bookingentry001mb.insertUser;
        this.insertDatetime = bookingentry001mb.insertDatetime;
        this.updatedUser = bookingentry001mb.updatedUser;
        this.updatedDatetime = bookingentry001mb.updatedDatetime;
    }
}
