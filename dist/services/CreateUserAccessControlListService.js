"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserAccessControlListService = void 0;
const repositories_1 = require("../repositories");
class CreateUserAccessControlListService {
    async execute({ userId, roles, permissions, }) {
        const repo = repositories_1.UserRepository();
        const user = await repo.findOne(userId);
        if (!user) {
            return new Error("User does not exists!");
        }
        const permissionsExists = await repositories_1.PermissionRepository().findByIds(permissions);
        const rolesExists = await repositories_1.RoleRepository().findByIds(roles);
        user.permissions = permissionsExists;
        user.roles = rolesExists;
        repo.save(user);
        return user;
    }
}
exports.CreateUserAccessControlListService = CreateUserAccessControlListService;
