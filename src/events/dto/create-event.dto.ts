export class CreateEventDto {
  eventStatus!: 'enable' | 'disable';
  eventType!: 'public' | 'private';
  eventName!: string;

  overlayEnabled?: boolean;
  overlayTitle?: string;

  bannerPath?: string;
  bannerOriginalName?: string;

  Link!: string;
  EventAddress!: string;
  VenueName!: string;
  FeatureHotelsTitle!: string;
  minimumNights!: number;

  bookableDates!: Date[];

  eventDates!: {
    dates: Date[];
  }[];

  checkInOutDates!: Date[];

  taxes!: {
    name: string;
    amount: number;
    type: 'fixed' | 'percentage';
  }[];
}
