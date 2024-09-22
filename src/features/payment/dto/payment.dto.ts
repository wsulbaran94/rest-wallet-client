import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import e from 'express';

export class ClienttDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  phone?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  document?: string;
}

export class PaymentDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '1000' })
  amount: string;
}

export class ConfirmDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  token: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  sessionId: string;
}