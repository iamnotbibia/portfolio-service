import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SERVICE_KEY } from 'src/constants/serviceKey';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';

export enum EnumPortfolioStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED',
}

@Schema({
  collection: `${SERVICE_KEY}_portfolios`,
  timestamps: true,
})
export class PortfolioDocument extends Document {
  declare _id: Types.ObjectId;

  @Prop({
    required: true,
    index: 1,
    trim: true,
  })
  portfolioKey: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  title: string;

  @Prop({
    type: String,
    default: '',
    trim: true,
  })
  description: string;

  @Prop({
    type: [String],
    default: [],
  })
  techStacks: string[];

  @Prop({
    type: String,
    default: '',
    trim: true,
  })
  coverImageUrl: string;

  @Prop({
    type: String,
    default: '',
    trim: true,
  })
  githubUrl: string;

  @Prop({
    type: String,
    default: '',
    trim: true,
  })
  demoUrl: string;

  @Prop({
    type: String,
    enum: EnumPortfolioStatus,
    default: EnumPortfolioStatus.DRAFT,
    index: 1,
  })
  status: string;

  @Prop({
    type: String,
    trim: true,
    default: '',
  })
  createdBy: string;

  @Prop({
    type: String,
    trim: true,
    default: '',
  })
  updatedBy: string;

  @Prop({
    type: Date,
    index: 1,
  })
  createdAt: Date;

  @Prop({
    type: Date,
  })
  updatedAt: Date;
}

export const PortfolioSchema: MongooseSchema<PortfolioDocument> =
  SchemaFactory.createForClass(PortfolioDocument);
