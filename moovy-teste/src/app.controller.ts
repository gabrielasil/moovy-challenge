import { Controller, Get, Header } from '@nestjs/common';
import { AppService,  } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  //@Header('content-type', 'text/html') overrides the default headers
  getHello(): {name: string} {
    return {name: 'Max'};
  }
}
