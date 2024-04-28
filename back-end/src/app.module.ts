import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkModule } from './work/work.module';
import { StackModule } from './stack/stack.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [WorkModule, StackModule, ImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
