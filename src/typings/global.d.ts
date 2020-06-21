declare namespace Types {
  interface User {
    userId: number;
    username: string;
    password: string;
  }

  type RequestUser = Omit<User, 'userId'>;
  type ValidateUser = Omit<User, 'password'>;
}