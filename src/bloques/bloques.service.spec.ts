import { Test, TestingModule } from '@nestjs/testing';
import { BloquesService } from './bloques.service';

describe('BloquesService', () => {
  let service: BloquesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloquesService],
    }).compile();

    service = module.get<BloquesService>(BloquesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
