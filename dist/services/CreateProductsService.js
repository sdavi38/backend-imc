"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductsService = void 0;
const repositories_1 = require("../repositories");
class CreateProductsService {
    async execute({ tipo, description }) {
        const existsTipo = await repositories_1.ProductRepository().findOne({ tipo });
        if (existsTipo) {
            return new Error("Type already exists");
        }
        const product = repositories_1.ProductRepository().create({
            tipo,
            description,
        });
        await repositories_1.ProductRepository().save(product);
        return product;
    }
}
exports.CreateProductsService = CreateProductsService;
