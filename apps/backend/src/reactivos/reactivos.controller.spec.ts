import { Test, TestingModule } from '@nestjs/testing';
import { ReactivosController } from './reactivos.controller';

describe('ReactivosController', () => {
  let controller: ReactivosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReactivosController],
    }).compile();

    controller = module.get<ReactivosController>(ReactivosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
