import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletDto, AmountDto } from './dto/wallet.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('wallet')
@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @ApiQuery({ name: 'document', required: true, type: String })
  @ApiQuery({ name: 'phone', required: true, type: String })
  @Get('balance')
  getBalance(@Query() walletDto: WalletDto) {
    return this.walletService.getBalance(walletDto);
  }

  @ApiQuery({ name: 'document', required: true, type: String })
  @ApiQuery({ name: 'phone', required: true, type: String })
  @Post('balance/reload')
  reloadBalance(@Query() walletDto: WalletDto, @Body() body: AmountDto) {
    const { amount } = body;
    return this.walletService.reloadBalance(walletDto, amount);
  }
}
