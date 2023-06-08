import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookingentryController } from "src/controller/bookingentry.controller";
import { Bookingentry001hb } from "src/entity/Bookingentry001hb";
import { Bookingentry001mb } from "src/entity/Bookingentry001mb";
import { BookingentryService } from "src/service/bookingentry.service";

@Module({
    imports: [TypeOrmModule.forFeature([Bookingentry001mb, Bookingentry001hb])],
    providers: [BookingentryService],
    controllers: [BookingentryController],
})
export class BookingentryModule { }