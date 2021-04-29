import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string;

  @Column()
  thumbnailUrl: string;

  @Column({ type: "json" })
  chapters: string;

  @Column()
  slug: string;
}
