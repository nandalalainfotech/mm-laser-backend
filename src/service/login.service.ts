import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDTO } from '../dto/Login.dto';
import { Login001hb } from '../entity/Login001hb';
import { Login001mb } from '../entity/Login001mb';
import { Repository } from 'typeorm';
var pdf = require("pdf-creator-node");
const excel = require('exceljs');


@Injectable()
export class LoginService {
    constructor(@InjectRepository(Login001mb) private readonly loginRepository: Repository<Login001mb>,
        @InjectRepository(Login001hb) private readonly loginhbRepository: Repository<Login001hb>) { }

    async create(loginDTO: LoginDTO): Promise<Login001mb> {
        const login001mb = new Login001mb();
        login001mb.setProperties(loginDTO);
        return this.loginRepository.save(login001mb);
    }

    async update(loginDTO: LoginDTO): Promise<Login001mb> {
        const login001mb = new Login001mb();
        login001mb.setProperties(loginDTO);
        await this.loginRepository.update({ loginId: login001mb.loginId }, login001mb);
        return login001mb;
    }

    async findAll(): Promise<Login001mb[]> {
        return this.loginRepository.find();
    }

    findOne(id: string): Promise<Login001mb> {
        return this.loginRepository.findOne(id);
    }

    // async remove(id: string): Promise<void> {
    //     let login = this.loginRepository.findOne(id);
    //     let login001hb = new Login001hb();
    //     login001hb.setProperties(await login);
    //     this.loginhbRepository.save(login001hb);
    //     await this.loginRepository.delete(id);
    // }

    async remove(id: number): Promise<void> {
        // let user = this.loginRepository.findOne(id);
        // let login001hb = new Login001hb();
        // login001hb.setProperties(await login);
        // this.loginhbRepository.save(login001hb);
        await this.loginRepository.delete(id);
      }
   

    // async remove(id: number): Promise<void> {
    //     let leaveType = this.leaveTypeRepository.findOne(id);
    //     let leavetype001hb = new Leavetype001hb();
    //     leavetype001hb.setProperties(await leaveType);
    //     this.leaveTypehbRepository.save(leavetype001hb);
    //     await this.leaveTypeRepository.delete(id);
    //   }
}