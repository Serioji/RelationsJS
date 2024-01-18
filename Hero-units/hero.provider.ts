import { DataSource } from 'typeorm';
import { Hero } from './Hero.entity';

export const HeroProviders = [
  {
    provide: 'HERO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Hero),
    inject: ['DATA_SOURCE'],
  },
];