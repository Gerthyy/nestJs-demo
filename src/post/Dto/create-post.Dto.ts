import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: 'titlt' })
  @IsNotEmpty({ message: 'title is not empty' })
  @Is
  title: string;

  @ApiProperty({ description: 'content' })
  content: string;

  @ApiProperty({ default: `${new Date()}`, description: 'create Date' })
  createDate: Date;

  @ApiProperty({ default: null })
  dataObj: Object;
}
