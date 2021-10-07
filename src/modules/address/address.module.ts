import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressController } from './controllers/address.controller';
import { Addresses } from './entities/address.entity';
import { AddressService } from './services/address.service';

@Module({
    imports: [TypeOrmModule.forFeature([Addresses])],
    providers: [AddressService],
    controllers: [AddressController]
})
export class AddressModule {}
