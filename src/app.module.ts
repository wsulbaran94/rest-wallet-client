import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './features/client/client.module';
import { WalletModule } from './features/wallet/wallet.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./env/.env`,
      isGlobal: true,
    }),
    ClientModule,
    WalletModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
