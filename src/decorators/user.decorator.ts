import { createParamDecorator } from '@nestjs/common';

export const User = createParamDecorator((data: string, req) => req?.user[data] ?? req.user);