import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from './controller/client/client.controller';
import { Clients } from './entities/client.entity';
import { ClientService } from './services/client.service';

@Module({
    imports: [TypeOrmModule.forFeature([Clients])],
    providers: [ClientService],
    controllers: [ClientController]
})
export class ClientModule {}
