import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BaseController } from '../../../commons/controllers.commons';
import { BaseService } from 'src/commons/service.commons';
import { Gender } from '../entities/gender.entity';
import { GenderService } from '../service/gender.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';
import { fileFilter, renameImage } from 'src/helpers/image.helper';

@Controller('api/gender')
export class GenderController extends BaseController<Gender>{

    constructor(private readonly genderService: GenderService){
        super();
    }

    getServices(): BaseService<Gender> {
        return this.genderService;
    }

    /*@Get('allWithRelations')
    findAllWithRelation() {
        return this.genderService.findAllWithRelation();
    }*/

}