import { Body, Controller, Post, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClienttDto, PaymentDto } from './dto/payment.dto';
import { ResponseDto } from 'src/common/dto/response.dto';

@ApiTags('Payment')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @ApiQuery({ name: 'document', required: true, type: String })
  @ApiQuery({ name: 'phone', required: true, type: String })
  @ApiResponse({
    status: 200,
    description: 'Cliente creado.',
    type: ResponseDto,
  })
  @Post()
  async payment(@Query() clientDto: ClienttDto, @Body() body: PaymentDto) {
    const { amount } = body;
    return await this.paymentService.payment(clientDto, amount);
  }
}
