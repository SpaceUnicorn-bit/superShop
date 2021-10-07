import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/commons/service.commons';
import { Repository } from 'typeorm';
import { Gender } from '../entities/gender.entity';

@Injectable()
export class GenderService extends BaseService <Gender> {
    
    constructor(@InjectRepository(Gender) private genderRepo: Repository<Gender>) {
        super();
    }

    getRepository(): Repository<any> {
        return this.genderRepo;
    }
    
}