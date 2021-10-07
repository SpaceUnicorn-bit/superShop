import { Controller } from '@nestjs/common';
import { Clients } from 'src/modules/client/entities/client.entity';
import { BaseController } from 'src/commons/controllers.commons';
import { BaseService } from 'src/commons/service.commons';
import { ClientService } from 'src/modules/client/services/client.service';


@Controller('api/client')
export class ClientController extends BaseController<Clients> {

    constructor(private readonly clientService: ClientService){
        super();
    }
    
    getServices(): BaseService<Clients> {
        return this.clientService;
    }

}
