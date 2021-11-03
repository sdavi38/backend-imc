"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductsService = void 0;
const repositories_1 = require("../repositories");
class GetAllProductsService {
    async execute() {
        const products = await repositories_1.ProductRepository().find();
        return products;
    }
}
exports.GetAllProductsService = GetAllProductsService;
