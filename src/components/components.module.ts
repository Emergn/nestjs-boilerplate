import { Module } from '@nestjs/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    DashboardModule,
    UsersModule
  ]
})
export class ComponentsModule {}
