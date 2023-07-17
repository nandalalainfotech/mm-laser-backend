import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from 'bcrypt';
import { ApplanguagesettingDTO } from "../dto/Applanguagesetting.dto";
import { UserDTO } from "../dto/User.dto";
import { User001hb } from "../entity/User001hb";
import { User001mb } from "../entity/User001mb";
import { MailService } from "../mail/mail.service";
import { Repository } from "typeorm";


@Injectable()
export class UserService {
    saltRounds = 10;

    constructor(private mailService: MailService,
        @InjectRepository(User001mb) private readonly userRepository: Repository<User001mb>,
        @InjectRepository(User001hb) private readonly userhbRepository: Repository<User001hb>){}
        
    async update(userDTO: UserDTO): Promise<User001mb> {
      
        const user001mb = await this.userRepository.findOne({ where: { personId: userDTO.personId } });
        user001mb.setProperties(userDTO);
        user001mb.password = user001mb.password;
        const hash = await bcrypt.hash(user001mb.password, this.saltRounds);
        user001mb.password = hash;
        return this.userRepository.save(user001mb);
    }
    async create(userDTO: UserDTO,): Promise<User001mb> {
        var user001mb = new User001mb();
        user001mb.setProperties(userDTO);
        user001mb.password = "erpnext001";
         const hash = await bcrypt.hash(user001mb.password, this.saltRounds);
         user001mb.password = hash;
         
         let user = await this.userRepository.save(user001mb);
         await this.mailService.sendUserConfirmation(user)
        return user001mb
    }
    async updatePassword(userDTO: UserDTO): Promise<User001mb> {

        
        const hash = await bcrypt.hash(userDTO.password, this.saltRounds);
        userDTO.password = hash;
        const user001mb = await this.userRepository.findOne({ where: { personId: userDTO.personId } });
        user001mb.password = userDTO.password;
        user001mb.status = "A";

        let user = await this.userRepository.save(user001mb);        
        return user
    }

    async updateUserName(user: any): Promise<User001mb> {
        const user001mb = await this.userRepository.findOne({ where: { personId: user.personId } });
        user001mb.username = user.newUsername;
        return this.userRepository.save(user001mb);
    }

    async update1(updateTheme: any): Promise<User001mb> {
        const user001mb = await this.userRepository.findOne({ where: { personId: updateTheme.personId } });
        user001mb.theme = updateTheme.theme;
        return this.userRepository.save(user001mb);
    }

    // async update2(updateLanguage: any): Promise<User001mb> {
    //     const user001mb = await this.userRepository.findOne({ where: { personId: updateLanguage.personId } });
    //     user001mb.language = updateLanguage.language;
    //     if(user001mb.language == 12){
    //         user001mb.language = 5
    //         return this.userRepository.save(user001mb);
    //      }
    //     return this.userRepository.save(user001mb);
    // }

    async findAll(): Promise<User001mb[]> {
        return this.userRepository.find({order: { personId: "DESC" } });
    }

    findOne(id: number): Promise<User001mb> {
        return this.userRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
                let user = this.userRepository.findOne(id);
                let user001hb = new User001hb();
                user001hb.setProperties((await user));
                this.userhbRepository.save(user001hb);
                await this.userRepository.delete(id);
            }
}






// import { Injectable } from "@nestjs/common";
// import { InjectRepository } from "@nestjs/typeorm";
// import * as bcrypt from 'bcrypt';
// import { UserDTO } from "../dto/User.dto";
// import { User001hb } from "../entity/User001hb";
// import { User001mb } from "../entity/User001mb";
// import { Repository } from "typeorm";
// var pdf = require("pdf-creator-node");
// const excel = require('exceljs');


// @Injectable()

// export class UserService {
//     saltRounds = 10;
    
//     constructor(
//         @InjectRepository(User001mb) private readonly userRepository: Repository<User001mb>,
//         @InjectRepository(User001hb) private readonly userhbRepository: Repository<User001hb>,) { }

//     async create(userDTO: UserDTO): Promise<User001mb> {
//         console.log("User001mb-->", User001mb);
//         const user001mb = new User001mb();
//         user001mb.setProperties(userDTO);
//         user001mb.password = "erpnext001";
//  		const hash = await bcrypt.hash(user001mb.password, this.saltRounds);
//         console.log("user001mb--11", user001mb);
//  		user001mb.password = hash;
//         return this.userRepository.save(user001mb);
//     }

    

//     async updatePassword(userDTO: UserDTO): Promise<User001mb> {
//         // console.log("User001mb-->", User001mb);
//       	    const hash = await bcrypt.hash(userDTO.password, this.saltRounds);
//          	userDTO.password = hash;
//        	    const user001mb = await this.userRepository.findOne({ where: { personId: userDTO.personId } });
//          	user001mb.password = userDTO.password;
//         	user001mb.status = "A";
//         	return this.userRepository.save(user001mb);
//         	}

//     async updateUserName(user: any): Promise<User001mb> {
//             const user001mb = await this.userRepository.findOne({ where: { personId: user.personId } });
//             user001mb.username = user.newUsername;
//             return this.userRepository.save(user001mb);
//             }
                
//     async update1(updateTheme: any): Promise<User001mb> {
//             const user001mb = await this.userRepository.findOne({ where: { personId: updateTheme.personId } });
//             user001mb.theme = updateTheme.theme;
//             return this.userRepository.save(user001mb);
//             }

//     async update(userDTO: UserDTO): Promise<User001mb> {
//         const user001mb = new User001mb();

//         user001mb.setProperties(userDTO);
//         await this.userRepository.update({ personId: user001mb.personId }, user001mb);

//         return this.userRepository.save(user001mb);
//     }

//     async findAll(): Promise<User001mb[]> {
//         // console.log("User001mb-->", User001mb);
//         return this.userRepository.find();
//     }

//     findOne(id: string): Promise<User001mb> {
//         // console.log("User001mb-->", User001mb);
//         return this.userRepository.findOne(id);
//     }

//     async remove(id: number): Promise<void> {
//         let user = this.userRepository.findOne(id);
//         let user001hb = new User001hb();
//         user001hb.setProperties((await user));
//         this.userhbRepository.save(user001hb);
//         await this.userRepository.delete(id);
//     }
// }