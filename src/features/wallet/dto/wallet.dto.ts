import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class WalletDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  phone?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  document?: string;
}


export class AmountDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  amount?: string;
}