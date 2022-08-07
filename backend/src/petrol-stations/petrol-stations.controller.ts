import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PetrolStationsService } from './petrol-stations.service';

@Controller('petrol-stations')
@ApiTags('2 - Petrol Stations')
export class PetrolStationsController {
  constructor(private readonly petrolStationsService: PetrolStationsService) {}

  @Get()
  findAll() {
    return this.petrolStationsService.findAll();
  }
}
