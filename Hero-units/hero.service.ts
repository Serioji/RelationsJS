import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Hero } from './Hero.entity';

@Injectable()
export class HeroService {
  constructor(
    @Inject('HERO_REPOSITORY')
    private heroRepository: Repository<Hero>,
  ) {}

  async getAllHeroesByMagicPoints(mana: number): Promise<Hero[]> {
    const manapoints = await this.heroRepository.find({ where: { mana } });
    return manapoints;
  }

  createOne(hero) {
    return this.heroRepository.save(hero);
  }

  async updateOne(id, hero) {
    await this.heroRepository.update(id, hero);
    return this.heroRepository.findOne({ where: { id } });
  }

  async deleteOne(id) {
    return this.heroRepository.delete(id);
  }
}