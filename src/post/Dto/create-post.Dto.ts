import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: 'titlt' })
  @IsNotEmpty({ message: 'title is not empty' })
  title: string;

  @ApiProperty({ description: 'content' })
  content: string;

  @ApiProperty({ default: `${new Date()}`, description: 'create Date' })
  createDate: Date;

  @ApiProperty({ default: null })
  dataObj: any;
}
