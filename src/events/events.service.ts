import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name)
    private eventModel: Model<Event>,
  ) {}

  async create(
  createEventDto: CreateEventDto,
  banner?: Express.Multer.File,
) {
 const eventData = {
  ...createEventDto,
  overlayEnabled: JSON.parse(createEventDto.overlayEnabled as unknown as string),
  minimumNights: Number(createEventDto.minimumNights),
  bookableDates: JSON.parse(createEventDto.bookableDates as unknown as string),
  eventDates: JSON.parse(createEventDto.eventDates as unknown as string),
  checkInOutDates: JSON.parse(createEventDto.checkInOutDates as unknown as string),
  taxes: JSON.parse(createEventDto.taxes as unknown as string),
  ...(banner && {
    bannerPath: banner.path.replace(/\\/g, '/'),
    bannerOriginalName: banner.originalname,
  }),
};

  const event = new this.eventModel(eventData);
  return event.save();
}

  async findAll() {
    return this.eventModel.find();
  }

  findOne(id: string) {
    return this.eventModel.findById(id);
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return this.eventModel.findByIdAndUpdate(id, updateEventDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.eventModel.findByIdAndDelete(id);
  }
}
