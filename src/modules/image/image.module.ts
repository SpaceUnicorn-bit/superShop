import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageController } from './controllers/image.controller';
import { Images } from './entities/image.entity';
import { ImageService } from './services/image.service';

@Module({
    imports: [TypeOrmModule.forFeature([Images])],
    providers: [ImageService],
    controllers: [ImageController]
  })
  export class ImageModule {}