import { Logger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { PetrolStation, PetrolStationDocument } from './schemas';
import { lowerPrices, raisePrices } from './array-filters';
import { randomNumber } from 'src/utils/random-number';

@Injectable()
export class PetrolStationsService {
  private readonly logger: Logger;
  constructor(
    @InjectModel(PetrolStation.name)
    private petrolStationModel: Model<PetrolStationDocument>
  ) {
    this.logger = new Logger(PetrolStationsService.name);
  }

  findAll() {
    return this.petrolStationModel.find();
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  updatePrices() {
    this.logger.log('[CRON] - Updating Petrol Stations prices...');
    return Promise.all([
      this.petrolStationModel.updateMany(
        {},
        { $mul: { 'bottles.$[elem].price': randomNumber(1.0095, 1.001) } },
        {
          arrayFilters: raisePrices
        }
      ),
      this.petrolStationModel.updateMany(
        {},
        { $mul: { 'bottles.$[elem].price': randomNumber(0.95, 0.98) } },
        {
          arrayFilters: lowerPrices
        }
      )
    ]);
  }
}
