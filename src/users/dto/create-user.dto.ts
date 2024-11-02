import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: '유저의 닉네임 입력',
    example: 'alex1',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  nickname: string;

  @IsEmpty()
  id: number;
}
