import { Injectable } from '@nestjs/common';
import { usersMock } from './__mock__/users.mock';

@Injectable()
export class UsersService {
  private readonly users: Types.User[];

  constructor() {
    this.users = usersMock;
  }

  async findOne(username: string): Promise<Types.User | undefined> {
    return this.users.find(user => user.username === username);
  }
}