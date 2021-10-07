import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutfitController } from './controllers/outfit.controller';
import { Outfits } from './entities/outfit.entity';
import { OutfitService } from './services/outfit.service';

@Module({
    imports: [TypeOrmModule.forFeature([Outfits])],
    providers: [OutfitService],
    controllers: [OutfitController]
})
export class OutfitsModule {}
