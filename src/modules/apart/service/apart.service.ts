import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/commons/service.commons';
import { getManager, Repository } from 'typeorm';
import { Aparts } from '../entities/aparts.entity';

@Injectable()
export class ApartService extends BaseService<Aparts> {

    constructor(@InjectRepository(Aparts) private apartService: Repository<Aparts>) {
        super();
    }

    getRepository(): Repository<Aparts> {
        return this.apartService;
    }

    createNewBill(idApart: string){
        //crear factura PDF con los datos de apartados 
        const manager = getManager();
        return manager.getRepository(Aparts).createQueryBuilder("Aparts").where(`Aparts.id = ${idApart}`).getRawOne();
    }
}