import { Controller } from '@nestjs/common';
import { BaseController } from 'src/commons/controllers.commons';
import { BaseService } from 'src/commons/service.commons';
import { Department } from '../entities/department.entity';
import { DepartmentService } from '../service/department.service';

@Controller('api/department')
export class DepartmentController extends BaseController<Department>{

    constructor(private readonly departmentService: DepartmentService){
        super();
    }

    getServices(): BaseService<Department> {
        return this.departmentService;
    }

}