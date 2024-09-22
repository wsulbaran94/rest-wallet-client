import { Body, Controller, Post, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClienttDto, PaymentDto, ConfirmDto } from './dto/payment.dto';
import { ResponseDto } from 'src/common/dto/response.dto';

@ApiTags('Payment')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @ApiQuery({ name: 'document', required: true, type: String })
  @ApiQuery({ name: 'phone', required: true, type: String })
  @ApiResponse({
    status: 200,
    description: 'Pago Registrado.',
    type: ResponseDto,
  })
  @Post()
  async payment(@Query() clientDto: ClienttDto, @Body() body: PaymentDto) {
    const { amount } = body;
    return await this.paymentService.payment(clientDto, amount);
  }

  @Post('confirm')
  @ApiResponse({
    status: 200,
    description: 'Pago confirmado.',
    type: ResponseDto,
  })
  @ApiQuery({ name: 'token', required: true, type: String })
  @ApiQuery({ name: 'sessionId', required: true, type: String })
  async confirmPayment(@Query() confirm: ConfirmDto) {
    const { token, sessionId } = confirm;
    return await this.paymentService.confirmPayment(token, sessionId);
  }
}
