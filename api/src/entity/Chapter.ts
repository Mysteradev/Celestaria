import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Chapter {
  @PrimaryColumn()
  id: number;

  @Column()
  thumbnailUrl: string;

  @Column()
  title: string;

  @Column()
  videoUrl: string;
}
