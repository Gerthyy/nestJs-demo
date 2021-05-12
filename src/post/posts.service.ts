import { DeletePostDto } from './Dto/delete-post.Dto';
import { UpdatePostDto } from './Dto/update-post.Dto';
// import { Model } from 'mongoose';
// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Posts, PostsDocument } from './schemas/posts.schema';
// import { CreatePostDto } from './dto/create-post.dto';

// @Injectable()
// export class PostsService {
//   constructor(
//     @InjectModel(Posts.name) private postsModel: Model<PostsDocument>,
//   ) {}

//   async create(createPostDto: CreatePostDto): Promise<Posts> {
//     const createPosts = new this.postsModel(createPostDto);
//     return createPosts.save();
//   }

//   async findAll(): Promise<Posts[]> {
//     return this.postsModel.find().exec();
//   }
// }

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './Dto/create-post.dto';
import { Posts, PostsDocument } from './schemas/posts.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts.name) private readonly postsModel: Model<PostsDocument>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<object> {
    const createdPost = new this.postsModel(createPostDto);
    createdPost.save();
    return { id: createdPost._id };
  }

  async findAll(): Promise<Posts[]> {
    // return this.postsModel.find().exec();
    return await this.postsModel.find({ deleted: 'false' }).exec();
  }

  async findOne(id: string): Promise<Posts> {
    return this.postsModel.findById(id);
  }

  async updatePost(id: string, updatePostDto: UpdatePostDto) {
    await this.postsModel.findOneAndUpdate({ _id: id }, updatePostDto);
  }

  async remove(id: string, deletePostDto: DeletePostDto) {
    await this.postsModel.findOneAndUpdate({ _id: id }, deletePostDto);
  }
}
