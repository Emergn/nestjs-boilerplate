import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { AuthModule } from './auth.module';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { usersMock } from '../users/__mock__/users.mock';

describe('AuthService', () => {
  let service: AuthService;
  let jwtService: JwtService;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateUser', () => {
    it('should be valid', async () => {
      jest.spyOn(usersService, 'findOne').mockResolvedValue(usersMock[0]);
      const { password, ...user } = usersMock[0];
      expect(await service.validateUser(user.username, password)).toEqual(user);
    });

    it('should be not valid', async () => {
      jest.spyOn(usersService, 'findOne').mockResolvedValue(usersMock[1]);
      const { username, password } = usersMock[0];
      expect(await service.validateUser(username, password)).toBeNull();
    });
  });

  describe('login', () => {
    it('should return token', async () => {
      jest.spyOn(jwtService, 'signAsync').mockResolvedValue(Promise.resolve('test_token'));
      expect(await service.login(usersMock[0])).toEqual({ accessToken: 'test_token' });
    });
  });
});
