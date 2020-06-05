declare namespace Types {
  interface User {
    userId: number;
    username: string;
    password: string;
  }

  type ValidateUser = Omit<User, 'password'>;
}