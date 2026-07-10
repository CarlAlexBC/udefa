import { Test, TestingModule } from '@nestjs/testing';
import { BloquesController } from './bloques.controller';

describe('BloquesController', () => {
  let controller: BloquesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BloquesController],
    }).compile();

    controller = module.get<BloquesController>(BloquesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
