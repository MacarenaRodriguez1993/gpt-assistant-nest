import { Module } from '@nestjs/common';
import { ApprendeAssistantService } from './apprende-assistant.service';
import { ApprendeAssistantController } from './apprende-assistant.controller';

@Module({
  controllers: [ApprendeAssistantController],
  providers: [ApprendeAssistantService],
})
export class ApprendeAssistantModule {}
