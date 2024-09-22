import { Injectable } from '@nestjs/common';
import { WalletDto } from './dto/wallet.dto';
import { convertJsonToXml } from 'src/common/util/util';
import { SoapService } from 'src/common/soap/soap.service';

@Injectable()
export class WalletService {

  constructor(private soapService: SoapService) {}

  async getBalance(walletData: WalletDto) {
    const buildXml = await convertJsonToXml(walletData);
    return this.soapService.requestSoap('/soap/wallet/balance', buildXml);
  }

  async reloadBalance(walletData: WalletDto, amount: string) {
    const mergeData = { ...walletData, amount };
    const buildXml = await convertJsonToXml(mergeData);
    return this.soapService.requestSoap('/soap/wallet/recharge', buildXml);
  }
}
