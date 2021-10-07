import { Controller } from '@nestjs/common';
import { BaseController } from 'src/commons/controllers.commons';
import { BaseService } from 'src/commons/service.commons';
import { Admin } from '../entities/admin.entity';
import { AdminService } from '../service/admin.service';

@Controller('api/admin')
export class AdminController extends BaseController<Admin> {

    constructor(private readonly adminService: AdminService){
        super();
    }

    getServices(): BaseService<Admin> {
        return this.adminService;
    }
}
