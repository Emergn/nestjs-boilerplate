import { SignOptions } from 'jsonwebtoken';

export namespace JWT {
  export const SECRET = process.env.JWT_SECRET;
  export const SIGN_OPTIONS: SignOptions = {
    algorithm: 'RS256',
    expiresIn: '10m',
  };
}