import { CacheModule, Module } from '@nestjs/common';
import { ComponentsModule } from './components/components.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CacheModule.register(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ComponentsModule
  ],
})
export class AppModule {}
