"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePermissionController = void 0;
const CreatePermissionService_1 = require("../services/CreatePermissionService");
class CreatePermissionController {
    async handle(request, response) {
        const { name, description } = request.body;
        const createPermissionService = new CreatePermissionService_1.CreatePermissionService();
        const result = await createPermissionService.execute({ name, description });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.CreatePermissionController = CreatePermissionController;
