import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from "@nestjs/typeorm";
import { diskStorage } from 'multer';
import { FileManagercontroller } from "../controller/file-manager.controller";
import { Filemanager001hb } from '../entity/Filemanager001hb';
import { Filemanager001mb } from '../entity/Filemanager001mb';
import { FileManagerservice } from "../service/file-manager.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Filemanager001mb,Filemanager001hb]),
    MulterModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          storage: diskStorage({
            destination: async (req, file, cb) => {
              const path: string = configService.get('STATICPATH');
              return cb(null, path);
            },
            filename: (req, file, cb) => {
              return cb(null, `${Date.now()}_${file.originalname}`);
            }
          })
        }
      },
    }),
  ],
  providers: [FileManagerservice],
  controllers: [FileManagercontroller],
})
export class FileManagerModule { }