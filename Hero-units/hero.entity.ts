
import { Entity, Column, PrimaryGeneratedColumn,} from 'typeorm';

@Entity()
export class Hero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column
  ({ nullable: true })
  mana: number;

  @Column({ length: 500 })
  name: string;

  @Column({ nullable: true })
  kills: number;
}

