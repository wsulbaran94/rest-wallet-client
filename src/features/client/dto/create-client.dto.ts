import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'Nombre del cliente' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'Apellido del cliente' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'Teléfono del cliente' })
  phone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'Documento del cliente' })
  document: string;
}
