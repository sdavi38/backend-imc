  import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UserRepository } from "../repositories";

type UserRequest = {
  email: string;
  password: string;
};

export class SessionService {
  async execute({ email, password }: UserRequest) {
    const repo = UserRepository();

    const user = await repo.findOne({ 
      where: {email },
      relations: ["roles"],
    })

    if (!user) {
      return new Error("User does not exists!");
    }

    const passwordMatch = await compare(password, user.password);
    

    if (!passwordMatch) {
      return new Error("User or Password incorrect");
    }

    const token = sign({}, process.env.SECRET_JWT, {
      subject: user.id,
    });
      
    return { token, user};
  }
}
