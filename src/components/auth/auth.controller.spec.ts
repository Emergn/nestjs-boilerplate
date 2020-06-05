import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AuthController } from './auth.controller';
import { AuthModule } from './auth.module';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { authGuardMock } from './__mock__/auth.mock';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

describe('Auth Controller', () => {
  let app: INestApplication;
  let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
    })
      .overrideGuard(LocalAuthGuard).useValue(authGuardMock)
      .compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);

    app = module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('#GET', () => {
    it('/auth/login', () => {
      jest.spyOn(service, 'login').mockImplementationOnce(async () => ({ accessToken: 'test_token' }));
      return request(app.getHttpServer())
        .post('/auth/login')
        .send({ username: 'john', password: 'changeme' })
        .expect(HttpStatus.CREATED);
    });
  });
});
