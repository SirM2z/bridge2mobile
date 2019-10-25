import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('copy')
  copy(@Query('str') str: string = 'hello copy!'): Promise<object> {
    return this.appService.copy(str);
  }

  @Get('getcopy')
  getCopy(): Promise<object> {
    return this.appService.getCopy();
  }
}
