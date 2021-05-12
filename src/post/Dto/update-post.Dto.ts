import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto {
  @ApiProperty({ description: 'titlt' })
  title: string;

  @ApiProperty({ description: 'content' })
  content: string;

  @ApiProperty({ default: `${new Date()}`, description: 'modify date' })
  modifyDate: Date;
}
