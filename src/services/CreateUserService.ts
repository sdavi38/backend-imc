import { hash } from "bcryptjs";
import { User } from "../entities/User";
import { UserRepository } from "../repositories";
import { RoleRepository } from '../repositories'

type UserRequest = {
  name: string;
  email: string;
  password: string;

};

export class CreateUserService {
  async execute({ password, email, name}: UserRequest): Promise<Error | User> {
    const existUser = await UserRepository().findOne({ email });

    if (existUser) {
      return new Error("Email already exists");
    }


    const passwordHash = await hash(password, 8);

    const user = UserRepository().create({ name, email, password: passwordHash, });

    await UserRepository().save(user);

    return user;
  }
}
