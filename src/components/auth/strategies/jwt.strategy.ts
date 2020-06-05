import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { envStringToBool, readFile } from '../../../utils';
import { JWT } from '../../../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: envStringToBool('DEBUG'),
      secretOrKey: readFile('public.pem'),
      signOptions: JWT.SIGN_OPTIONS
    });
  }

  async validate(payload): Promise<Types.ValidateUser> {
    return { userId: payload.sub, username: payload.username };
  }
}