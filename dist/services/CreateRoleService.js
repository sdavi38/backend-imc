"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoleService = void 0;
const repositories_1 = require("../repositories");
class CreateRoleService {
    async execute({ name, description }) {
        const repo = repositories_1.RoleRepository();
        if (await repo.findOne({ name })) {
            return new Error("Role already exists");
        }
        const role = repo.create({ name, description });
        await repo.save(role);
        return role;
    }
}
exports.CreateRoleService = CreateRoleService;
