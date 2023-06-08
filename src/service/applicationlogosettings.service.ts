import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ApplicationlogosettingsDTO } from "../dto/applicationlogosettings.dto";
import { Applicationlogosettings001mb } from "../entity/Applicationlogosettings001mb";

import { Repository } from "typeorm";

@Injectable()
export class ApplicationlogoSettingsservice {

    constructor(@InjectRepository(Applicationlogosettings001mb) private readonly applicationlogosettingsRepository: Repository<Applicationlogosettings001mb>,) { }

    async create(file: any, applicationlogosettingsDTO: ApplicationlogosettingsDTO,): Promise<ApplicationlogosettingsDTO> {
        const applicationlogosettings001mb = new Applicationlogosettings001mb();
        applicationlogosettings001mb.setProperties(applicationlogosettingsDTO);
        applicationlogosettings001mb.originalfilename = file.filename;
        return this.applicationlogosettingsRepository.save(applicationlogosettings001mb);
    }

    async findAll(): Promise<Array<ApplicationlogosettingsDTO>> {
        return this.applicationlogosettingsRepository.find();
    }

    async findOne() {
        return await this.applicationlogosettingsRepository.findOne({
            order: { registerid: 'DESC' }
        });
    }
}

