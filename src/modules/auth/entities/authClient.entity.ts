import { Clients } from '../../client/entities/client.entity';
import { EntityRepository, Repository} from 'typeorm';

@EntityRepository()
export class authClientReposity extends Repository<Clients> {
    
}