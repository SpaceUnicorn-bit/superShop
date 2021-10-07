import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/commons/service.commons';
import { Repository } from 'typeorm';
import { Outfits } from '../entities/outfit.entity';

@Injectable()
export class OutfitService extends BaseService <Outfits> {

    constructor(@InjectRepository(Outfits) private outfitRepo: Repository<Outfits>){
        super();
    }

    getRepository(): Repository<Outfits> {
        return this.outfitRepo;
    }

}