import { ExecutionContext } from '@nestjs/common';
import { usersMock } from '../../users/__mock__/users.mock';

export const authGuardMock = {
  canActivate: (context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();
    req.user = usersMock[0];
    return true;
  }
};
