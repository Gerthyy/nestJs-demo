import { DeletePostDto } from './Dto/delete-post.Dto';
import { Posts } from './schemas/posts.schema';
import { UpdatePostDto } from './Dto/update-post.Dto';
import { CreatePostDto } from './Dto/create-post.Dto';
import { PostsService } from './posts.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('post')
@ApiTags('tiezhi')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @ApiOperation({ summary: 'get index' })
  async index(): Promise<Posts[]> {
    return this.postsService.findAll();
  }

  @Post('create')
  @ApiOperation({ summary: 'create a post' })
  async create(@Body() createPostDto: CreatePostDto): Promise<object> {
    return await this.postsService.create(createPostDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'update a post' })
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    await this.postsService.updatePost(id, updatePostDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'get a post detail' })
  async detail(@Param('id') id: string): Promise<any> {
    return this.postsService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'deleted a post' })
  async remove(@Param('id') id: string, @Body() deletePostDto: DeletePostDto) {
    return this.postsService.remove(id, deletePostDto);
  }
}
