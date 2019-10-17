import { Module } from '@nestjs/common';
import { LaunchDarklyService } from './launch-darkly.service';

@Module({
  providers: [LaunchDarklyService],
  exports: [LaunchDarklyService],
})
export class LaunchDarklyModule {}
