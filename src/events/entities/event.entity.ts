import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Event {
  @Prop({ required: true })
  eventStatus!: string;

 @Prop({ required: true })
  eventType!: string;

  @Prop({ required: true })
  eventName!: string;

  @Prop()
  overlayEnabled?: boolean;

  @Prop()
  overlayTitle?: string;

  @Prop()
  bannerPath?: string;

  @Prop()
  bannerOriginalName?: string;

  @Prop({ required: true })
  Link!: string;

  @Prop({ required: true })
  EventAddress!: string;

  @Prop({ required: true })
  VenueName!: string;

  @Prop({ required: true })
  FeatureHotelsTitle!: string;

  @Prop({ required: true })
  minimumNights!: number;

  @Prop({ type:[Date], required:true })
  bookableDates!: Date[];

  @Prop({
    type: [
      {
        dates: { type: [Date], required: true },
      },
    ],
    required: true,
  })
  eventDates!: { dates: Date[] }[];

  @Prop({ type: [Date], required: true })
  checkInOutDates!: Date[];

  @Prop({
    type: [
      {
        name: { type: String, required: true },
        amount: { type: Number, required: true },
        type: { type: String, enum: ['fixed','percentage'], required: true },
      },
    ],
    required: true,
  })
  taxes!: {
    name: string;
    amount: number;
    type: string;
  }[];

}

export const EventSchema = SchemaFactory.createForClass(Event);
