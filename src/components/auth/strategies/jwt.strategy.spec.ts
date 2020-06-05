import { Test, TestingModule } from '@nestjs/testing';
import { JwtStrategy } from './jwt.strategy';
import { AuthModule } from '../auth.module';

describe('AuthService', () => {
  let strategy: JwtStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();

    strategy = module.get<JwtStrategy>(JwtStrategy);
  });

  it('should be defined', () => {
    expect(strategy).toBeDefined();
  });

  describe('validate', () => {
    it('should be valid', async () => {
      const result = await strategy.validate({
        sub: 1,
        username: 'john',
      });
      expect(result).toEqual({ userId: 1, username: 'john' });
    });
  });
});
