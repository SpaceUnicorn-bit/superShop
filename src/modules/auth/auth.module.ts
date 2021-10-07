import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controllers/auth.controller';
import { authClientReposity } from './entities/authClient.entity';
import { AuthService } from './services/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([authClientReposity])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
