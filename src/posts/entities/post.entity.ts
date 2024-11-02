import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  id: number;

  @Column({ type: 'int', nullable: false, comment: 'post를 작성한 user의 ID' })
  userId: number;

  @Column({ type: 'varchar', nullable: false, comment: 'post의 title' })
  title: string;

  @Column({ type: 'text', nullable: false, comment: '유저가 작성한 게시판 글' })
  content: string;

  // ManyToOne을 해서 하나의 유저에 여러개의 게시판이 연결되게 한다.
  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: 'userId' }) // typeOrm의 relations을 사용시 어느 컬럼을 기준으로 Join을 할지 설정
  user: UserEntity;
}
