import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { HeroProviders } from './hero.provider';
import { HeroService } from './hero.service';
import { HeroController } from './hero.controller';

@Module({
  controllers: [HeroController],
  imports: [DatabaseModule],
  providers: [...HeroProviders, HeroService],
})
export class HeroModule {}
