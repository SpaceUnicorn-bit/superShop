import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/commons/service.commons';
import { Repository } from 'typeorm';
import { Department } from '../entities/department.entity';

@Injectable()
export class DepartmentService extends BaseService <Department> {
    
    constructor(@InjectRepository(Department) private departmentRepo: Repository<Department>){
        super();
    }

    getRepository(): Repository<any> {
        return this.departmentRepo;
    }
    
}