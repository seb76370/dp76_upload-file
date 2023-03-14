import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('notes')
export class NotesEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  title: string;

  @Column('text', { nullable: true, default: null })
  categorie: string;

  @Column('text')
  description: string;
}