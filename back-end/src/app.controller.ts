import { Controller, Get, Param, Post, Res, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import { of } from 'rxjs';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('uploads/:img')
  async get_pic(@Param('img') img_name: string, @Res() res) {
    return of(res.sendFile(join(process.cwd(), 'uploads/' + img_name)));
  };
}
