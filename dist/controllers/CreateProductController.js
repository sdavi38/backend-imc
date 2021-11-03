"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const CreateProductsService_1 = require("../services/CreateProductsService");
class CreateProductController {
    async handle(request, response) {
        const { tipo, description } = request.body;
        const createProductService = new CreateProductsService_1.CreateProductsService();
        const product = await createProductService.execute({
            tipo,
            description,
        });
        return response.json(product);
    }
}
exports.CreateProductController = CreateProductController;
