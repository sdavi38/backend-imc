"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const bcryptjs_1 = require("bcryptjs");
const repositories_1 = require("../repositories");
class CreateUserService {
    async execute({ password, email, name }) {
        const existUser = await repositories_1.UserRepository().findOne({ email });
        if (existUser) {
            return new Error("Email already exists");
        }
        const passwordHash = await bcryptjs_1.hash(password, 8);
        const user = repositories_1.UserRepository().create({ name, email, password: passwordHash, });
        await repositories_1.UserRepository().save(user);
        return user;
    }
}
exports.CreateUserService = CreateUserService;
