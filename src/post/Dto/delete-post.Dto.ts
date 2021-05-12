import { ApiProperty } from '@nestjs/swagger';

export class DeletePostDto {
  @ApiProperty({ default: 'true', description: 'true or false' })
  deleted: string;

  @ApiProperty({ default: `${new Date()}`, description: 'deleted date' })
  deletedDate: Date;
}
