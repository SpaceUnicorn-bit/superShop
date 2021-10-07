import { Controller, Get } from '@nestjs/common';
import { BaseController } from '../../../commons/controllers.commons';
import { BaseService } from 'src/commons/service.commons';
import { Outfits } from '../entities/outfit.entity';
import { OutfitService } from '../services/outfit.service';

@Controller('api/outfits')
export class OutfitController extends BaseController<Outfits>{

    constructor(private readonly outfitService: OutfitService) {
        super();
    }
    
    getServices(): BaseService<Outfits> {
        return this.outfitService;
    }
    
}