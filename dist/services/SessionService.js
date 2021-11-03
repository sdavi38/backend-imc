"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionService = void 0;
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const repositories_1 = require("../repositories");
class SessionService {
    async execute({ email, password }) {
        const repo = repositories_1.UserRepository();
        const user = await repo.findOne({
            where: { email },
            relations: ["roles"],
        });
        if (!user) {
            return new Error("User does not exists!");
        }
        const passwordMatch = await bcryptjs_1.compare(password, user.password);
        if (!passwordMatch) {
            return new Error("User or Password incorrect");
        }
        const token = jsonwebtoken_1.sign({}, process.env.SECRET_JWT, {
            subject: user.id,
        });
        return { token, user };
    }
}
exports.SessionService = SessionService;
