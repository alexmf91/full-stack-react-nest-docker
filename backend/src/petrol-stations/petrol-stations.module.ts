import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetrolStationsController } from './petrol-stations.controller';
import { PetrolStationsService } from './petrol-stations.service';
import { PetrolStation, PetrolStationSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PetrolStation.name, schema: PetrolStationSchema }])
  ],
  controllers: [PetrolStationsController],
  providers: [PetrolStationsService],
  exports: [PetrolStationsService]
})
export class PetrolStationsModule {}
