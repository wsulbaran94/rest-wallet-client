import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { SoapService } from 'src/common/soap/soap.service';
import { convertJsonToXml } from 'src/common/util/util';
import * as soap from 'soap';
@Injectable()
export class ClientService {
  private readonly wsdlUrl = 'http://localhost:8000/prueba';

  constructor(private soapService: SoapService) {}

  async create(createClientDto: CreateClientDto) {
    // const ultis = await convertJsonToXml(createClientDto);

    // return this.soapService.requestSoap('/soap/client/register', ultis);

    return new Promise((resolve, reject) => {
      soap.createClient(this.wsdlUrl, (err, client) => {
        if (err) {
          reject(err);
        }
        // Verifica que el cliente se haya creado y que tenga el método `register`
        if (!client.register) {
          console.error(
            'El método `register` no está definido en el cliente SOAP',
          );
          return reject(
            new Error('Método `register` no disponible en el cliente SOAP'),
          );
        }
        client.register(createClientDto, (err, result) => {
          if (err) {
            reject(err);
          }
          const { item } = result.return;
          const response = {};
          for (let index = 0; index < item.length; index++) {
            const element = item[index];
            Object.assign(response, {
              [element.key['$value']]: element.value
                ? element.value['$value']
                : null,
            });
          }
          resolve(response);
        });
      });
    });
  }
}
