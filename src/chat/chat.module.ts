import { Module } from '@nestjs/common';
import { MessagesModule } from 'src/messages/messages.module';

@Module({
  imports: [MessagesModule],
  exports: [MessagesModule],
})
export class ChatModule {}
