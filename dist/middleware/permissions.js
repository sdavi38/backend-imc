"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is = exports.can = void 0;
const repositories_1 = require("../repositories");
function can(permissionsRoutes) {
    return async (request, response, next) => {
        const { userId } = request;
        const user = await repositories_1.UserRepository().findOne({
            where: { id: userId },
            relations: ["permissions"],
        });
        if (!user) {
            return response.status(400).json("User does not exists");
        }
        const permissionExists = user.permissions
            .map((permission) => permission.name)
            .some((permission) => permissionsRoutes.includes(permission));
        if (!permissionExists) {
            return response.status(401).end();
        }
        return next();
    };
}
exports.can = can;
function is(rolesRoutes) {
    return async (request, response, next) => {
        const { userId } = request;
        const user = await repositories_1.UserRepository().findOne({
            where: { id: userId },
            relations: ["roles"],
        });
        if (!user) {
            return response.status(400).json("Usuário não tem permissão");
        }
        const roleExists = user.roles
            .map((role) => role.name)
            .some((role) => rolesRoutes.includes(role));
        if (!roleExists) {
            return response.status(401).end();
        }
        return next();
    };
}
exports.is = is;
