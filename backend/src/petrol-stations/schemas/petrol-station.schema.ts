import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Bottle } from '../types';

export type PetrolStationDocument = PetrolStation & Document;

@Schema()
export class PetrolStation {
  @Prop()
  name: string;

  @Prop({
    type: [
      {
        capacity: { type: Number },
        units: { type: String },
        price: { type: Number }
      }
    ]
  })
  bottles: Array<Bottle>;
}

export const PetrolStationSchema = SchemaFactory.createForClass(PetrolStation);
