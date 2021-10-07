import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Clients } from 'src/modules/client/entities/client.entity';
import { BaseService } from 'src/commons/service.commons';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService extends BaseService<Clients>{

    constructor(@InjectRepository(Clients) private clientRepo: Repository<Clients>){
        super();
    }
    
    getRepository(): Repository<Clients> {
        return this.clientRepo;
    }    

}
