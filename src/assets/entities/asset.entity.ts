import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import crypto from 'crypto';

export type AssetDocument = HydratedDocument<Asset>;

@Schema({ timestamps: true })
export class Asset {
  @Prop({ default: () => crypto.randomUUID() })
  _id: string;

  @Prop()
  name: string;

  @Prop()
  symbol: string;

  @Prop({ unique: true, index: true })
  image_url: string;

  @Prop()
  price: number;
}

export const AssetSchema = SchemaFactory.createForClass(Asset);
