// import { MongooseModule } from '@nestjs/mongoose';
// import { PostsSchema, Posts } from './schemas/posts.schema';
// import { Module } from '@nestjs/common';

// @Module({
//   imports: [
//     MongooseModule.forFeature(
//       [{ name: Posts.name, schema: PostsSchema }],
//       'nest-blog-project',
//     ),
//   ],
//   controllers: [],
//   providers: [],
// })
// export class PostsModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Posts, PostsSchema } from './schemas/posts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Posts.name, schema: PostsSchema }]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
