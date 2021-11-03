"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePermissionService = void 0;
const repositories_1 = require("../repositories");
class CreatePermissionService {
    async execute({ name, description, }) {
        const repo = repositories_1.PermissionRepository();
        if (await repo.findOne({ name })) {
            return new Error("Permission already exists");
        }
        const permission = repo.create({ name, description });
        await repo.save(permission);
        return permission;
    }
}
exports.CreatePermissionService = CreatePermissionService;
