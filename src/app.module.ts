// // import { PostsService } from './post/posts.service';
// import { PostsModule } from './post/posts.module';
// // import { PostsController } from './post/posts.controller';
// import { Module } from '@nestjs/common';
// // import { AppController } from './app.controller';
// import { MongooseModule } from '@nestjs/mongoose';

// @Module({
//   imports: [
//     MongooseModule.forRoot('mongodb://localhost:27017/nest-blog-project'),
//     PostsModule,
//   ],
//   // controllers: [AppController, PostsController],
//   // providers: [PostsService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './post/posts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-blog-api', {
      useFindAndModify: false,
      useNewUrlParser: true,
    }),
    PostsModule,
  ],
})
export class AppModule {}
