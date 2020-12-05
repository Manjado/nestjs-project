import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Ip,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { of } from 'rxjs';
import { UserData } from 'src/interface/user-data';
import { sleep } from 'src/utils/sleep';
import { CreateFoxDto } from './dto/create-fox.dto';

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
  //DEFAULT
  //@Get()
  // //async myFirstAction(): Promise<UserData> {
  // myFirstAction(): UserData {
  //   return {
  //     name: 'Testowy',
  //     surname: 'Osoba',
  //     age: 99,
  //   };
  // }
  //-----------------------------------------------
  // HTTPCODE, HEDER
  // @Get()
  // @HttpCode(200)
  // @Header('X-My-Test', 'Hellow')
  // //@Redirect('/test')
  // myFirstAction(): UserData {
  //   return {
  //     name: 'Testowy',
  //     surname: 'Osoba',
  //     age: 99,
  //   };
  // }
  //-------------------------------------------------
  // GET ROUTING
  // @Get('/')
  // index(): string {
  //   return 'home screen';
  // }
  // @Get('/one')
  // myFirstAction(): UserData {
  //   return {
  //     name: 'Testowy',
  //     surname: 'Osoba',
  //     age: 99,
  //   };
  // }
  // @Get('/second')
  // mySecondAction(): string {
  //   return 'Hello, World!';
  // }
  //--------------------------------------------------

  // CRUD
  // @Get('/')
  // getItem(): string {
  //   return 'My items';
  // }

  // @Post('/')
  // postItem(): string {
  //   return 'ok!';
  // }
  //----------------------------------------------------
  // PARAM
  // @Get('/:name/:surname')
  // getItem(
  //   @Param('name') name: string,
  //   @Param('surname') surname: string,
  // ): string {
  //   return `Hello! ${name} ${surname}`;
  // }

  // OPTIONAL PARAM
  // @Get('/:id/:title?')
  // getFox(@Param('id') id: number): string {
  //   return `Fox #${id}`;
  // }
  //----------------------------------------------------

  @Post('/')
  createFox(@Body() nexFox: CreateFoxDto): string {
    console.log(nexFox);
    return `New fox #${nexFox.name} created.`;
  }
}

// @Req() request: Request, to w sumie niskopoziomwy dostęp
// @Res()  wyłącza poprzednie metody! Wówczas trzeba ręcznie dodawać zwrotki np response.json([]);
