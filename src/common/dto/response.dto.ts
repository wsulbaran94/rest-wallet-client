import { ApiProperty } from '@nestjs/swagger';

export class ResponseDto<T> {
  @ApiProperty({
    description: 'Indicates if the operation was successful',
    example: false,
  })
  success: boolean;

  @ApiProperty({
    description: 'Operation code',
    example: '00',
  })
  cod_error: string;

  @ApiProperty({
    description: 'Error message',
    example: 'Error message',
  })
  message_error?: string;

  @ApiProperty({
    description: 'success message',
    example: 'success message',
  })
  message?: string;

  @ApiProperty({
    description: 'Additional data related to the response',
    type: 'object',
    nullable: true,
    example: null,
  })
  data: T | null;
}
