import { Test, TestingModule } from '@nestjs/testing';
import { AuthModule } from '../auth.module';
import { LocalStrategy } from './local.strategy';
import { usersMock } from '../../users/__mock__/users.mock';
import { AuthService } from '../auth.service';
import { Request } from 'express';

describe('AuthService', () => {
  let strategy: LocalStrategy;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();

    strategy = module.get<LocalStrategy>(LocalStrategy);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(strategy).toBeDefined();
  });

  describe('validate', () => {
    it('should be valid', async () => {
      const { password, ...user } = usersMock[0];
      jest.spyOn(authService, 'validateUser').mockImplementationOnce(async () => user);
      const result = await strategy.validate(request(user.username, password));
      expect(result).toEqual(user);
    });

    it('should throw an UnauthorizedException', async () => {
      const { password, ...user } = usersMock[0];
      jest.spyOn(authService, 'validateUser').mockImplementationOnce(async () => null);
      await expect(strategy.validate(request(user.username, password))).rejects.toThrow('Unauthorized');
    });
  });
});

function request(username: string, password: string): Request {
  return {
    body: {
      username,
      password,
    },
  } as Request;
}