import { Module } from '@nestjs/common';
import { ComponentsModule } from './components/components.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ComponentsModule
  ],
})
export class AppModule {}
