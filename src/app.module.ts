import { Module } from '@nestjs/common';
import { GptModule } from './gpt/gpt.module';
import { ConfigModule } from '@nestjs/config';
import { ApprendeAssistantModule } from './apprende-assistant/apprende-assistant.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    GptModule,
    ApprendeAssistantModule
  ]
})
export class AppModule {}
