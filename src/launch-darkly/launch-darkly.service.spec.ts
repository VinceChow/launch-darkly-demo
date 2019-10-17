import { Test, TestingModule } from '@nestjs/testing';
import { LaunchDarklyService } from './launch-darkly.service';

describe('LaunchDarklyService', () => {
  let service: LaunchDarklyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaunchDarklyService],
    }).compile();

    service = module.get<LaunchDarklyService>(LaunchDarklyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
