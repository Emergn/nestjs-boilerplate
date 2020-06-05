import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { User } from '../../decorators/user.decorator';

@Controller('dashboard')
export class DashboardController {
  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@User() user) {
    return user;
  }
}
