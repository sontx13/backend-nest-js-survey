import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type SubscriberDocument = HydratedDocument<Subscriber>;

@Schema({timestamps: true })
export class Subscriber {
  @Prop({ required: true })
  email: string;

  @Prop()
  name: string;

  @Prop({ required: true })
  skills: string[];

  @Prop({type:Object})
  createdBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop({type:Object})
  updatedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop({type:Object})
  deletedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt: Date;

  @Prop()
  isDeleted: boolean;

}

export const SubscriberSchema = SchemaFactory.createForClass(Subscriber);