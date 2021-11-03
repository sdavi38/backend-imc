"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRolePermissionService = void 0;
const repositories_1 = require("../repositories");
class CreateRolePermissionService {
    async execute({ roleId, permissions, }) {
        const repo = repositories_1.RoleRepository();
        const role = await repo.findOne(roleId);
        if (!role) {
            return new Error("Role does not exists!");
        }
        const permissionsExists = await repositories_1.PermissionRepository().findByIds(permissions);
        role.permissions = permissionsExists;
        await repo.save(role);
        return role;
    }
}
exports.CreateRolePermissionService = CreateRolePermissionService;
