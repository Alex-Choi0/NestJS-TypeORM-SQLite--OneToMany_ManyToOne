import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsEmpty()
  id: number;

  @ApiProperty({
    type: Number,
    description: '게시글을 작성한 유저 ID',
    example: 1,
    required: true,
  })
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @ApiProperty({
    type: String,
    description: '게피판 글의 제목',
    example: '테스트 게시판1',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    type: String,
    description: '게피판 글의 내용',
    example: '이것은 테스트로 작성한 게시판 글입니다. - 1',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  content: string;
}
