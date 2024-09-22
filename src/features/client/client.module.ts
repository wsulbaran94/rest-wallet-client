import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { SoapService } from 'src/common/soap/soap.service';

@Module({
  controllers: [ClientController],
  providers: [ClientService, SoapService],
})
export class ClientModule {}
