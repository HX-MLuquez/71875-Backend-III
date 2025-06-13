import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name', type: 'varchar', length: 100 })
  first_name: string;

  @Column({ name: 'last_name', type: 'varchar', length: 100 })
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  age: number;
}
