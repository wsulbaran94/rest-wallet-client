import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/common/service/Email/Email.service';
import { SoapService } from 'src/common/soap/soap.service';
import { ClienttDto } from './dto/payment.dto';
import { ResponseDto } from 'src/common/dto/response.dto';
import { convertJsonToXml } from 'src/common/util/util';

@Injectable()
export class PaymentService {
  constructor(
    private soapService: SoapService,
    private email: EmailService,
  ) {}

  async payment(client: ClienttDto, amount: string) {
    const mergeData = { ...client, amount };
    const buildXml = await convertJsonToXml(mergeData);
    const response: ResponseDto<any> = await this.soapService.requestSoap(
      '/soap/payment',
      buildXml,
    );

    if (response?.success) {
      const { email, token } = response.data;
      const subject = 'Pago Creado';
      const text = 'A recibido un token de confirmación para su pago';
      const html = `<h1>Token de confirmación: ${token}</h1>`;
      await this.email.resendMail(email, subject, text, html);
      delete response.data['token'];
    }

    return response;
  }

  async confirmPayment(token: string, sessionId: string) {
    const mergeData = { token, sessionId };
    const buildXml = await convertJsonToXml(mergeData);
    return this.soapService.requestSoap('/soap/payment/confirm', buildXml);
  }
}
