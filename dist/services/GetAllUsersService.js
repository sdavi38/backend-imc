"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersService = void 0;
const repositories_1 = require("../repositories");
class GetAllUsersService {
    async execute() {
        const users = await repositories_1.UserRepository().find({
            relations: ['roles', 'permissions']
        });
        return users;
    }
}
exports.GetAllUsersService = GetAllUsersService;
