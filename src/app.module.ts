import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LaunchDarklyModule } from './launch-darkly/launch-darkly.module';

@Module({
  imports: [LaunchDarklyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
