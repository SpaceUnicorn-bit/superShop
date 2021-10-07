import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../../../commons/service.commons';
import { Repository } from 'typeorm';
import { Images } from '../entities/image.entity';

@Injectable()
export class ImageService extends BaseService <Images> {

    constructor(@InjectRepository(Images) private imageRepo: Repository<Images>) {
        super();
    }

    getRepository(): Repository<Images> {
        return this.imageRepo;
    }

}