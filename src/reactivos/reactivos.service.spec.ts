import { Test, TestingModule } from '@nestjs/testing';
import { ReactivosService } from './reactivos.service';

describe('ReactivosService', () => {
  let service: ReactivosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReactivosService],
    }).compile();

    service = module.get<ReactivosService>(ReactivosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
