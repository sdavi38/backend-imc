"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductsController = void 0;
const GetAllProductsService_1 = require("../services/GetAllProductsService");
class GetAllProductsController {
    async handle(request, response) {
        const getAllProductsService = new GetAllProductsService_1.GetAllProductsService();
        const products = await getAllProductsService.execute();
        return response.json(products);
    }
}
exports.GetAllProductsController = GetAllProductsController;
