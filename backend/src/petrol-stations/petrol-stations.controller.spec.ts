import { Test, TestingModule } from '@nestjs/testing';
import { PetrolStationsController } from './petrol-stations.controller';
import { PetrolStationsService } from './petrol-stations.service';

describe('PetrolStationsController', () => {
  let controller: PetrolStationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetrolStationsController],
      providers: [PetrolStationsService]
    }).compile();

    controller = module.get<PetrolStationsController>(PetrolStationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
