import { Controller, Get, Headers, Ip, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('fox')
export class FoxController {
  @Get()
  myFirstAction(
    @Headers('accept-encoding') encoding: string,
    @Ip() ip: string,
    @Query('name') name: string,
    @Query('surname') surname: string,
    @Req() request: Request,
  ) {
    console.log(ip);
    console.log(encoding);
    console.log('name', name, 'surname', surname);
    console.log(request, 'req');
    return `<h1>Hello ${name} ${surname} !Your IP is: ${ip}</h1>`;
  }
}

// @Req() request: Request, to w sumie niskopoziomwy dostęp
