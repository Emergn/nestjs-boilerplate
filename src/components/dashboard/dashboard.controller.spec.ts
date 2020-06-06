import { Test, TestingModule } from '@nestjs/testing';
import { DashboardController } from './dashboard.controller';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { authGuardMock } from '../auth/__mock__/auth.mock';
import * as request from 'supertest';
import { DashboardModule } from './dashboard.module';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { usersMock } from '../users/__mock__/users.mock';

describe('Dashboard Controller', () => {
  let app: INestApplication;
  let controller: DashboardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DashboardModule],
    })
      .overrideGuard(JwtAuthGuard).useValue(authGuardMock)
      .compile();

    controller = module.get<DashboardController>(DashboardController);

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('#GET', () => {
    it('/dashboard/profile', () => {
      return request(app.getHttpServer())
        .get('/dashboard/profile')
        .expect(HttpStatus.OK)
        .then(({ body }) => expect(body).toEqual(usersMock[0]));
    });
  });
});
