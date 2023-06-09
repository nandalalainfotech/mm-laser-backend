import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User001mb } from '../entity/User001mb';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService, private config: ConfigService) { }

  async sendUserConfirmation(user001mb: User001mb) {
    const temppassword = "erpnext001";
    await this.mailerService.sendMail({
      to: user001mb.email,
      from: 'selvamraja1104@gmail.com', // override default from
      subject: 'Welcome to Nandalala Info Tech App! Confirm your Email',
      template: './confirmation', // `.hbs` extension is appended automatically
      context: {
        name: user001mb.username,
        temp_pass_word: temppassword,
      },
    });
  }
}
