import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { EmailService } from 'src/common/service/Email/Email.service';
import { SoapService } from 'src/common/soap/soap.service';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService, EmailService, SoapService],
})
export class PaymentModule {}
