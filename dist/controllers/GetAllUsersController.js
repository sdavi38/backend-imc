"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersController = void 0;
const GetAllUsersService_1 = require("../services/GetAllUsersService");
class GetAllUsersController {
    async handle(request, response) {
        const getAllUsersService = new GetAllUsersService_1.GetAllUsersService();
        const users = await getAllUsersService.execute();
        return response.json(users);
    }
}
exports.GetAllUsersController = GetAllUsersController;
