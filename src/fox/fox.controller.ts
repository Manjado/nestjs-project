import { Controller, Get, Headers, Ip, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { of } from 'rxjs';
import { UserData } from 'src/interface/user-data';
import { sleep } from 'src/utils/sleep';

@Controller('fox')
export class FoxController {
  // BASE
  // http://localhost:3000/fox?name=Mike&surname=Testowy
  // @Get()
  // myFirstAction(
  //   @Headers('accept-encoding') encoding: string,
  //   @Ip() ip: string,
  //   @Query('name') name: string,
  //   @Query('surname') surname: string,
  //   @Req() request: Request,
  // ) {
  //   console.log(ip);
  //   console.log(encoding);
  //   console.log('name', name, 'surname', surname);
  //   console.log(request, 'req');
  //   return `<h1>Hello ${name} ${surname} !Your IP is: ${ip}</h1>`;
  // }
  //---------------------------------------------
  // PROMISE
  // @Get()
  // myFirstAction() {
  //   return new Promise((resolve) =>
  //     setTimeout(() => resolve('Hello, World'), 2500),
  //   );
  // }
  //---------------------------------------------
  // AWAIT
  // @Get()
  // async myFirstAction() {
  //   return await sleep();
  // }
  //---------------------------------------------
  // RXJS
  // @Get()
  // async myFirstAction() {
  //   return of([]);
  // }
  //---------------------------------------------
  // RES
  // @Get()
  // myFirstAction(@Res() response: Response) {
  //   response.json([]);
  // }
  //---------------------------------------------
  @Get()
  // async myFirstAction(): Promise<UserData> {
  myFirstAction(): UserData {
    return {
      name: 'Testowy',
      surname: 'Osoba',
      age: 99,
    };
  }
}

// @Req() request: Request, to w sumie niskopoziomwy dostęp
// @Res()  wyłącza poprzednie metody! Wówczas trzeba ręcznie dodawać zwrotki np response.json([]);
