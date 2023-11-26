import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutsController } from './produts/produts.controller';

@Module({
  imports: [],
  controllers: [AppController, ProdutsController],
  providers: [AppService],
})
export class AppModule {}
