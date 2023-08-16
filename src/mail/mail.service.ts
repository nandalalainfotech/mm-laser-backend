import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User001mb } from '../entity/User001mb';
import { Doctormaster001mb } from 'src/entity/Doctormaster001mb';
import { Employeedetails001mb } from 'src/entity/employeedetails001mb';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService, private config: ConfigService) { }

  async sendUserConfirmation(user001mb: User001mb) {
    const temppassword = "erpnext001";
    await this.mailerService.sendMail({
      to: user001mb.email,
      from: 'kavichandran877@gmail.com', // override default from
      subject: 'Welcome to Nandalala Info Tech App! Confirm your Email',
      template: './confirmation', // `.hbs` extension is appended automatically
      context: {
        name: user001mb.username,
        temp_pass_word: temppassword,
        id: user001mb.personId
      },
    });
  }


  async sendUserConfirmation1(employeedetails001mb: Employeedetails001mb[]) {
     console.log("employeedetails001mb---->123", employeedetails001mb);
    const date1 = new Date();
    let Employeedetails001mbs = [];
    for (let i = 0; i < employeedetails001mb.length; i++) {
      //var results = employeedetails001mb.map(({ slno }) => region)
      // console.log("results-->121", results);
      // console.log("doctormaster001mbs---12", doctormaster001mbs);
    }

    // if (date1 > data[i].validity) {
    //   employeemaster001mb.push(data[i])
    //   var results = employeemaster001mb.map(({ emailid }) => emailid)
    //   console.log("results-->", results);
    // }
    // var id = 149;
    //   var filteredPosts = employeemaster001mb.filter(function(comment) {
    //     return comment.employeeId === id;
    //   });
    //   console.log("filteredPosts--->10", filteredPosts);
    //   await this.mailerService.sendMail({
    //     to: results,
    //     cc: 'cc@example.com',
    //     from: process.env.SENDER_EMAIL, // override default from
    //     subject: 'Welcome to Nandalala Info Tech App! Confirm your Email',
    //     template: './confirmation2', // `.hbs` extension is appended automatically
    //     context: {
    //       name: employeemaster001mb.map(({ employeename }) => employeename),
    //       validity: employeemaster001mb.map(({ validity }) => validity),
    //       id: filteredPosts.employeeId
    //     },
    //   });

  }
}

