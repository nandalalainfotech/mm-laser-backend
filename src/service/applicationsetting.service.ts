import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ApplicationsettingDTO } from "../dto/Applicationsetting.dto";
import { Applicationsetting001hb } from "../entity/Applicationsetting001hb";
import { Applicationsetting001mb } from "../entity/Applicationsetting001mb";
import { Repository } from "typeorm";

@Injectable()
export class ApplicationsettingService {
    constructor(@InjectRepository(Applicationsetting001mb) private readonly appsettingsRepository: Repository<Applicationsetting001mb>,
        @InjectRepository(Applicationsetting001hb) private readonly appsettingshbRepository: Repository<Applicationsetting001hb>) { }

    async create(applicationsettingDTOs: ApplicationsettingDTO[]): Promise<Applicationsetting001mb[]> {
        const applicationsetting001mb = new Applicationsetting001mb();
        if (applicationsettingDTOs.length > 0) {
            this.appsettingsRepository.createQueryBuilder()
                .delete()
                .from(Applicationsetting001mb)
                .where("loginUser = :loginUser", { loginUser: applicationsettingDTOs[0].loginUser })
                .execute();
        }

        for (let i = 0; i < applicationsettingDTOs.length; i++) {
            let applicationsetting001mb = new Applicationsetting001mb();
            applicationsetting001mb.setProperties(applicationsettingDTOs[i]);
            this.appsettingsRepository.save(applicationsetting001mb);
        }
        return this.appsettingsRepository.find();
    }

    async update(applicationsettingDTOs: ApplicationsettingDTO): Promise<Applicationsetting001mb> {
        const applicationsetting001mb = new Applicationsetting001mb();
        applicationsetting001mb.setProperties(applicationsettingDTOs);
        await this.appsettingsRepository.update({ appId: applicationsetting001mb.appId }, applicationsetting001mb);
        return applicationsetting001mb;
    }

    async findAll(): Promise<Applicationsetting001mb[]> {
        return this.appsettingsRepository.find();
    }

    findOne(id: number): Promise<Applicationsetting001mb> {
        return this.appsettingsRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        let applicationsetting = this.appsettingsRepository.findOne(id);
        let applicationsetting001hb = new Applicationsetting001hb();
        applicationsetting001hb.setProperties((await applicationsetting));
        this.appsettingshbRepository.save(applicationsetting001hb);
        await this.appsettingsRepository.delete(id);
    }

}
function login001mb(login001mb: any) {
    throw new Error("Function not implemented.");
}
