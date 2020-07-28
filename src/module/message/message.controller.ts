import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './message.dto';
import { Message } from './message.entity';

@Controller()
export class MessageController {
  constructor(private readonly messageService: MessageService) {}
  @Post('/api/v3/message')
  addMessage(@Body() createMessageDto: CreateMessageDto): Promise<void> {
    return this.messageService.create(createMessageDto);
  }
  @Delete('/api/v3/message/:id')
  deleteMessage(@Param('id') id: string): Promise<void> {
    return this.messageService.delete(id);
  }
  @Get('/api/v3/message')
  getMessage(): Promise<Message> {
    return this.messageService.findAll();
  }
}
