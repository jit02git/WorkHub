import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Task extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ default: 'todo' })
  status: string;

  @Prop()
  dueDate: string;

  @Prop({ type: Types.ObjectId, ref: 'Project', required: true })
  projectId: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
