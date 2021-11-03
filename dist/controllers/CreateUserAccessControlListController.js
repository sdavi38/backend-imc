"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserAccessControlListController = void 0;
const CreateUserAccessControlListService_1 = require("../services/CreateUserAccessControlListService");
class CreateUserAccessControlListController {
    async handle(request, response) {
        const { permissions, roles } = request.body;
        const { userId } = request;
        const createUserACLService = new CreateUserAccessControlListService_1.CreateUserAccessControlListService();
        const result = await createUserACLService.execute({
            userId,
            permissions,
            roles,
        });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.CreateUserAccessControlListController = CreateUserAccessControlListController;
