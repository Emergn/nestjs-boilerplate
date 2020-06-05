import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {
  }

  async validateUser(username: string, pass: string): Promise<Types.ValidateUser> {
    const user = await this.usersService.findOne(username);
    const { password, ...result } = user;

    return user && password === pass
      ? result
      : null;
  }

  async login(user: Types.ValidateUser) {
    const payload = { username: user.username, sub: user.userId };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }
}