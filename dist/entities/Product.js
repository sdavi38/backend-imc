"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const BaseEntity_1 = require("./BaseEntity");
const OrderProducts_1 = require("./OrderProducts");
let Product = class Product extends BaseEntity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Product.prototype, "tipo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(() => OrderProducts_1.OrdersProducts, ordersProducts => ordersProducts.product),
    __metadata("design:type", Array)
], Product.prototype, "order_products", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Product.prototype, "price", void 0);
Product = __decorate([
    typeorm_1.Entity("products")
], Product);
exports.Product = Product;