import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { SoapService } from 'src/common/soap/soap.service';
import { convertJsonToXml } from 'src/common/util/util';

@Injectable()
export class ClientService {
  constructor(private soapService: SoapService) {}

  async create(createClientDto: CreateClientDto) {
    const ultis = await convertJsonToXml(createClientDto);

    return this.soapService.requestSoap('/soap/client/register', ultis);
  }
}
