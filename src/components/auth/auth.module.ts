import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { readFile } from '../../utils';
import { JWT } from '../../constants';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secretOrPrivateKey: readFile('private.pem'),
      signOptions: JWT.SIGN_OPTIONS
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
