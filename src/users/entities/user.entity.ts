import { PostEntity } from 'src/posts/entities/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('increment', { type: 'int', comment: '유저 ID' })
  id: number;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
    comment: '유저 닉네임',
  })
  nickname: string;

  @OneToMany(() => PostEntity, (post) => post.user)
  post: PostEntity;
}
