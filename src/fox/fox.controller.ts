import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateFoxDto } from './dto/create-fox.dto';
import { FoxService } from './fox.service';

@Controller('fox')
export class FoxController {
  constructor(@Inject(FoxService) private foxService: FoxService) {}
  @Post('/')
  createFox(@Body() newFox: CreateFoxDto): string {
    return this.foxService.createFox(newFox);
  }
}
