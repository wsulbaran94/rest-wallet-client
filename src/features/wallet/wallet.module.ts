import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { SoapService } from 'src/common/soap/soap.service';

@Module({
  controllers: [WalletController],
  providers: [WalletService, SoapService],
})
export class WalletModule {}
