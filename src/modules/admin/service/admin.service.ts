import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService} from 'src/commons/service.commons';
import { Admin } from '../entities/admin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService extends BaseService<Admin> {

    constructor(@InjectRepository(Admin) private adminRepo: Repository<Admin>) {
        super();
    }

    getRepository(): Repository<Admin> {
        return this.adminRepo;
    }
    
}
