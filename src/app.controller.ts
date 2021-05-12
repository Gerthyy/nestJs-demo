import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('default')
export class AppController {
  @Get()
  @ApiOperation({ summary: 'get index page data' })
  index(): string {
    return '123';
  }
}
function ApiUseTags() {
  throw new Error('Function not implemented.');
}
