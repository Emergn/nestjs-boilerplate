import { createParamDecorator } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';

export const User = createParamDecorator((data: string, context: ExecutionContextHost) => {
  const [req] = context.getArgs();
  return req?.user[data] ?? req.user;
});