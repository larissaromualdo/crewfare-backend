import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';


const bannersUploadPath = './uploads/banners';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}


  @Get()
  findAll() {
    return this.eventsService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('banner', {
      storage: diskStorage({
        destination: bannersUploadPath,
        filename: (_req, file, callback) => {
          const uniqueName = `${Date.now()}-${Math.round(
            Math.random() *1e9,
          )}${extname(file.originalname)}`;

          callback(null, uniqueName);
        },
      }),
    }),
  )
  create(
  @Body() createEventDto: CreateEventDto,
  @UploadedFile() banner?: Express.Multer.File,
) {
  return this.eventsService.create(createEventDto, banner);
}
}
