import { Test, TestingModule } from '@nestjs/testing';
import { PlantelesController } from './planteles.controller';

describe('PlantelesController', () => {
  let controller: PlantelesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlantelesController],
    }).compile();

    controller = module.get<PlantelesController>(PlantelesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
