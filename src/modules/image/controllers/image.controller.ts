import { Controller, Get } from '@nestjs/common';
import { BaseController } from '../../../commons/controllers.commons';
import { BaseService } from 'src/commons/service.commons';
import { Images } from '../entities/image.entity';
import { ImageService } from '../services/image.service';

@Controller('api/images')
export class ImageController extends BaseController<Images>{

    constructor(private readonly imageService: ImageService){
        super();
    }
    
    getServices(): BaseService<Images> {
        return this.imageService;
    }

}