import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostsDocument = Posts & Document;

@Schema()
export class Posts {
  @Prop({ example: 'title1', discription: 'title' })
  title: string;

  @Prop({ example: 'content1', discription: 'content' })
  content: string;

  @Prop({ discription: 'content', default: 'false' })
  deleted: string;

  @Prop({ discription: 'create Date' })
  createDate: Date;

  @Prop({ discription: 'deleted Date' })
  deletedDate: Date;

  @Prop({ discription: 'modify Date' })
  modifyDate: Date;

  @Prop({ type: Object })
  dataObj: Object;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
