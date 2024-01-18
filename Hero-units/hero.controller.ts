import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { HeroService } from './hero.service';
import { Hero } from './Hero.entity';
  
  @Controller('hero')
  export class HeroController {
    constructor(private readonly heroService: HeroService) {}
  
   
  @Get('mana/:mana')
  async getAllHeroesByMagicPoints(@Param('mana') mana: number) {
    return this.heroService.getAllHeroesByMagicPoints(mana);
  }
  
    @Post()
    createHero(@Body() hero) {
      return this.heroService.createOne(hero);
    }
  
    @Put(':id')
    updateHero(@Param('id') id, @Body() hero) {
      return this.heroService.updateOne(id, hero);
    }
  
    @Delete(':id')
    deleteHero(@Param('id') id) {
      return this.heroService.deleteOne(id);
    }
  }
  