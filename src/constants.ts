import {SignOptions} from 'jsonwebtoken';

export namespace JWT {
  export const SIGN_OPTIONS: SignOptions = {
    algorithm: 'RS256',
    expiresIn: '10m',
  };
}