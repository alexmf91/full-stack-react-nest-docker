import { Test, TestingModule } from '@nestjs/testing';
import { PetrolStationsService } from './petrol-stations.service';

describe('PetrolStationsService', () => {
  let service: PetrolStationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetrolStationsService]
    }).compile();

    service = module.get<PetrolStationsService>(PetrolStationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
