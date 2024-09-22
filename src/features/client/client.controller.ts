import { Controller, Post, Body } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('clientes')
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Cliente creado.' })
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }
}
