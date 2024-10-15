import { Body, Controller, Post } from '@nestjs/common';
import { ApprendeAssistantService } from './apprende-assistant.service';
import { QuestionDto } from './dtos/question.dto';

@Controller('apprende-assistant')
export class ApprendeAssistantController {
  constructor(private readonly apprendeAssistantService: ApprendeAssistantService) {}

  @Post('create-thread')
  async createThread(){
    return await this.apprendeAssistantService.createThread()
  }

  @Post('user-question')
  async userQuestion(
    @Body() questionDto:QuestionDto
  ){
    return await this.apprendeAssistantService.userQuestion(questionDto)
  }
}
