import { User } from "../entities/User";
import { UserRepository } from "../repositories";

export class GetAllUsersService {
  async execute(): Promise<User[]> {
    const users = await UserRepository().find({
      relations:['roles', 'permissions']
    });
    
  
    return users;
  }
}
