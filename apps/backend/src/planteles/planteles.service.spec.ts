import { Test, TestingModule } from '@nestjs/testing';
import { PlantelesService } from './planteles.service';

describe('PlantelesService', () => {
  let service: PlantelesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantelesService],
    }).compile();

    service = module.get<PlantelesService>(PlantelesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
